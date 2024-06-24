import Joi from 'joi';

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

export const addProductSchema = Joi.object({
  photo: Joi.string(),
  name: Joi.string()
    .required()
    .messages({ 'any required': 'name is required' }),
  suppliers: Joi.string()
    .required()
    .messages({ 'any required': 'supplier is required' }),
  stock: Joi.number()
    .required()
    .messages({ 'any required': 'stock is required' }),
  price: Joi.number()
    .required()
    .messages({ 'any required': 'price is required' }),
  category: Joi.string()
    .valid(...categories)
    .required()
    .messages({ 'any required': 'category is required' }),
});

export const updateProductSchema = Joi.object({
  photo: Joi.string(),
  name: Joi.string(),
  suppliers: Joi.string(),
  stock: Joi.number(),
  price: Joi.number(),
  cactegory: Joi.string(),
});
