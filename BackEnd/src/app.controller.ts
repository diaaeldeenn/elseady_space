import express from "express";
import type { Request, Response } from "express";
import "dotenv/config";
import cors from "cors";
import helmet from "helmet";
import { rateLimit } from "express-rate-limit";
import {
  AppError,
  globalErrorHandler,
} from "./common/utils/global/response.error.js";
import projectRouter from "./modules/projects/projects.controller.js";
import referenceRouter from "./modules/references/references.controller.js";
import profileRouter from "./modules/profile/profile.controller.js";
import contactRouter from "./modules/contact/contact.controller.js";

const app: express.Application = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 200, // Limit each IP to 200 requests per `window`
  message: "To Many Request Try After 15 Minutes",
  legacyHeaders: false,
});

app.use(cors(), helmet(), limiter, express.json());
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Welcome In My Api" });
});

app.use("/api/projects", projectRouter);
app.use("/api/references", referenceRouter);
app.use("/api/profile", profileRouter);
app.use("/api/contact", contactRouter);

app.use("{/*demo}", (req: Request, res: Response) => {
  throw new AppError(`Url ${req.originalUrl} Not Found!`, 404);
});
app.use(globalErrorHandler);
export default app;
