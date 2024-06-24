import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    password: {
      type: String,
      required: [true, 'Set password for user'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
    },
    token: String,
  },
  { versionKey: false, timestamps: true }
);

export const User = model('users', userSchema);
