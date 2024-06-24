import { Schema, model } from 'mongoose';

const productSchema = new Schema(
  {
    photo: { type: String },
    name: { type: String },
    address: { type: String },
    products: { type: Number },
    price: { type: Number },
    status: { type: String },
    order_date: { type: Date },
  },
  { versionKey: false, timestamps: false }
);

export const Product = model('products', productSchema);
