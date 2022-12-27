import { Schema } from "mongoose";

export const UserSchema = new Schema({
    email: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    password: { type: String, required: true },
    isVIP: { type: Boolean, required: true, default: false },
    isAdmin: { type: Boolean, required: true, default: false },
  });

    