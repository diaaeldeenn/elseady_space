import type { NextFunction, Request, Response } from "express";
import { successResponse } from "../../common/utils/global/response.success.js";
import { AppError } from "../../common/utils/global/response.error.js";
import ReferenceRepository from "../../DB/repository/reference.repository.js";

class ReferenceService {
  private readonly _referenceRepository = new ReferenceRepository();
  constructor() {}

  getAllReferences = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const { technology, topic } = req.query;

      const filter: {
        technologies?: { $in: string[] };
        topics?: { $in: string[] };
      } = {};

      if (technology && typeof technology === "string") {
        filter.technologies = { $in: [technology] };
      }

      if (topic && typeof topic === "string") {
        filter.topics = { $in: [topic] };
      }

      const references = await this._referenceRepository.find({
        filter,
        options: { sort: { order: 1 } },
      });

      return successResponse({
        res,
        message: "References fetched successfully",
        data: references,
      });
    } catch (error) {
      next(error);
    }
  };

  getReferenceBySlug = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const { slug } = req.params;

      if (!slug || typeof slug !== "string") {
        return next(new AppError("Invalid slug provided", 400));
      }

      const reference = await this._referenceRepository.findOne({
        filter: { slug },
      });

      if (!reference) {
        return next(new AppError("Reference not found", 404));
      }

      return successResponse({
        res,
        message: "Reference fetched successfully",
        data: reference,
      });
    } catch (error) {
      next(error);
    }
  };
}

export default new ReferenceService();
