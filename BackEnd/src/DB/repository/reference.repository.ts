import type { Model } from "mongoose";
import BaseRepository from "./base.repository.js";
import { ReferenceModel, type ReferenceI } from "../models/reference.model.js";

class ReferenceRepository extends BaseRepository<ReferenceI> {
  constructor(protected readonly model: Model<ReferenceI> = ReferenceModel) {
    super(model);
  }
}

export default ReferenceRepository;
