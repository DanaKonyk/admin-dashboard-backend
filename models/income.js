import { Schema, model } from 'mongoose';

const incomeSchema = new Schema(
  {
    name: { type: String },
    amount: { type: String },
    type: { type: String },
  },
  { versionKey: false, timestamps: false }
);

export const Income = model('income', incomeSchema);
