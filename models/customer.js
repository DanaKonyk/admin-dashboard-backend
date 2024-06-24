import { Schema, model } from 'mongoose';

const customerSchema = new Schema(
  {
    image: { type: String },
    name: { type: String },
    email: { type: String },
    spent: { type: String },
    phone: { type: String },
    address: { type: String },
    register_date: { type: Date },
  },
  { versionKey: false, timestamps: false }
);

export const Customer = model('customers', customerSchema);
