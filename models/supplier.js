import { Schema, model } from 'mongoose';

const supplierSchema = new Schema(
  {
    name: { type: String },
    address: { type: String },
    suppliers: { type: String },
    date: { type: Date },
    amount: { type: String },
    status: { type: String, enum: ['Active', 'Deactive'] },
  },
  { versionKey: false, timestamps: false }
);

export const Supplier = model('suppliers', supplierSchema);
