import mongoose, { Schema, Document } from "mongoose";
import { ProjectCategory } from "../../common/enum/project.enum.js";

export interface ProjectI extends Document {
  title: string;
  slug: string;
  description: string;
  category: ProjectCategory;
  technologies: string[];
  thumbnail: string;
  liveDemo?: string;
  features: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  order: number;
}

const ProjectSchema = new Schema<ProjectI>(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    category: {
      type: String,
      enum: ProjectCategory,
      required: true,
    },
    technologies: [{ type: String }],
    thumbnail: { type: String, required: true },
    liveDemo: { type: String, required: true },
    features: [{ type: String }],
    githubUrl: { type: String },
    liveUrl: { type: String },
    featured: { type: Boolean, default: false },
    order: { type: Number, default: 0 },
  },
  { timestamps: true },
);

export const ProjectModel = mongoose.models.Project || mongoose.model<ProjectI>("Project", ProjectSchema);
