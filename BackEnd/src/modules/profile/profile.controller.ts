import { Router } from "express";
import profileService from "./profile.service.js";

const profileRouter = Router();

profileRouter.get("/", profileService.getProfile);

export default profileRouter;