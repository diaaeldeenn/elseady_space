import mongoose, { Schema, Document } from 'mongoose';

export interface ProfileI extends Document {
  name: string;
  title: string;
  location: string;
  bio: string;
  cv:string;
  email: string;
  github: string;
  linkedin: string;
  education: string[];
  courses: string[];
  achievements: string[];
}

const ProfileSchema = new Schema<ProfileI>(
  {
    name: { type: String, required: true },
    title: { type: String, required: true },
    location: { type: String, required: true },
    bio: { type: String, required: true },
    cv: { type: String, required: true },
    email: { type: String, required: true },
    github: { type: String, required: true },
    linkedin: { type: String, required: true },
    education: [{ type: String }],
    courses: [{ type: String }],
    achievements: [{ type: String }],
  },
  { timestamps: true }
);

export const ProfileModel = mongoose.models.Profile || mongoose.model<ProfileI>('Profile', ProfileSchema);