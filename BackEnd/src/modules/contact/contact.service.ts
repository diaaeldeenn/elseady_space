import type { NextFunction, Request, Response } from "express";
import { successResponse } from "../../common/utils/global/response.success.js";
import { AppError } from "../../common/utils/global/response.error.js";
import type { ContactDto } from "../../common/middleware/schema/contact.schema.js";
import { sendEmail } from "../../common/utils/email/send.email.js";
import { contactEmailTemplate } from "../../common/utils/email/email.template.js";

class ContactService {
  sendContactMessage = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const { name, email, subject, message } = req.body as ContactDto;
      const isSent = await sendEmail({
        to: process.env.MY_GMAIL!,
        subject: `[Elseady Space] - ${subject}`,
        html: contactEmailTemplate(name, email, subject, message),
        replyTo: email,
      });

      if (!isSent) {
        return next(
          new AppError("Failed to send message, please try again later.", 500),
        );
      }

      return successResponse({
        res,
        message: "Message sent successfully! Thank you for reaching out.",
        data: null,
      });
    } catch (error) {
      next(error);
    }
  };
}

export default new ContactService();
