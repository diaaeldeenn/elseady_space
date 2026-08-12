import { Router } from "express";
import projectService from "./projects.service.js";

const projectRouter = Router();

projectRouter.get("/", projectService.getAllProjects);
projectRouter.get("/:slug", projectService.getProjectBySlug);

export default projectRouter;
