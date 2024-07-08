import { Schema, model } from 'mongoose';

const categories = [
  'Medicine',
  'Head',
  'Hand',
  'Dental Care',
  'Skin Care',
  'Eye Care',
  'Vitamins & Supplements',
  'Orthopedic Products',
  'Baby Care',
];

const productSchema = new Schema(
  {
    photo: { type: String },
    name: { type: String },
    suppliers: { type: String },
    products: { type: Number },
    stock: { type: Number },
    price: { type: Number },
    category: { type: String, enum: categories },
  },
  { versionKey: false, timestamps: false }
);

export const Product = model('products', productSchema);
