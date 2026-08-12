import { Router } from "express";
import contactService from "./contact.service.js";
import { schema } from "../../common/middleware/schema/schema.js";
import { ContactSchema } from "../../common/middleware/schema/contact.schema.js";

const contactRouter = Router();

contactRouter.post("/",schema(ContactSchema),contactService.sendContactMessage);

export default contactRouter;
