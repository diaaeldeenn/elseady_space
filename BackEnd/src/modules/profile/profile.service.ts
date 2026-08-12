import type { NextFunction, Request, Response } from "express";
import { successResponse } from "../../common/utils/global/response.success.js";
import { AppError } from "../../common/utils/global/response.error.js";
import ProfileRepository from "../../DB/repository/profile.repository.js";

class ProfileService {
  private readonly _profileRepository = new ProfileRepository();
  constructor() {}
  getProfile = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const profile = await this._profileRepository.findOne({ filter: {} });

      if (!profile) {
        return next(new AppError("Profile data not found", 404));
      }

      return successResponse({
        res,
        message: "Profile fetched successfully",
        data: profile,
      });
    } catch (error) {
      next(error);
    }
  };
}

export default new ProfileService();
