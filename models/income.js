import { Schema, model } from 'mongoose';

const incomeSchema = new Schema(
  {
    amount: { type: String },
    name: { type: String },
    type: { type: String },
  },
  { versionKey: false, timestamps: false }
);

export const Income = model('income', incomeSchema);
