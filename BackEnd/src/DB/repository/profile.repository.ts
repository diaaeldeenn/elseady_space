import type { Model } from "mongoose";
import BaseRepository from "./base.repository.js";
import { ProfileModel, type ProfileI } from "../models/profile.model.js";

class ProfileRepository extends BaseRepository<ProfileI> {
  constructor(protected readonly model: Model<ProfileI> = ProfileModel) {
    super(model);
  }
}

export default ProfileRepository;
