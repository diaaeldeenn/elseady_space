import type { Model } from "mongoose";
import BaseRepository from "./base.repository.js";
import { ProjectModel, type ProjectI } from "../models/projects.model.js";

class ProjectRepository extends BaseRepository<ProjectI> {
  constructor(protected readonly model: Model<ProjectI> = ProjectModel) {
    super(model);
  }
}

export default ProjectRepository;
