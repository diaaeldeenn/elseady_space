import type { NextFunction, Request, Response } from "express";
import { successResponse } from "../../common/utils/global/response.success.js";
import { AppError } from "../../common/utils/global/response.error.js";
import ProjectRepository from "../../DB/repository/project.repository.js";

class ProjectService {
  private readonly _projectRepository = new ProjectRepository();
  constructor() {}

  getAllProjects = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { category } = req.query;

      const filter: { category?: string } = {};

      if (category && typeof category === "string") {
        filter.category = category;
      }

      const projects = await this._projectRepository.find({
        filter,
        options: { sort: { order: 1 } },
      });

      return successResponse({
        res,
        message: "Projects fetched",
        data: projects,
      });
    } catch (error) {
      next(error);
    }
  };

  getProjectBySlug = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const { slug } = req.params;
      const project = await this._projectRepository.findOne({
        filter: { slug: slug! },
      });
      if (!project) return next(new AppError("Project not found", 404));

      return successResponse({
        res,
        message: "Project fetched",
        data: project,
      });
    } catch (error) {
      next(error);
    }
  };
}

export default new ProjectService();
