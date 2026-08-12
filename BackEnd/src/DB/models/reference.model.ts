import mongoose, { Schema, Document } from "mongoose";

export interface ReferenceI extends Document {
  title: string;
  slug: string;
  description: string;
  thumbnail: string;
  technologies: string[];
  sessionsCount: number;
  topics: string[];
  githubUrl: string;
  order: number;
}

const ReferenceSchema = new Schema<ReferenceI>(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    thumbnail: { type: String, required: true },
    technologies: [{ type: String }],
    sessionsCount: { type: Number, required: true },
    topics: [{ type: String, required: true }],
    githubUrl: { type: String, required: true },
    order: { type: Number, default: 0 },
  },
  { timestamps: true },
);

export const ReferenceModel = mongoose.models.Reference || mongoose.model<ReferenceI>("Reference", ReferenceSchema);
