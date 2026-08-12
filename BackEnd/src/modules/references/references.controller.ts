import { Router } from "express";
import referenceService from "./references.service.js";

const referenceRouter = Router();

referenceRouter.get("/", referenceService.getAllReferences);
referenceRouter.get("/:slug", referenceService.getReferenceBySlug);

export default referenceRouter;