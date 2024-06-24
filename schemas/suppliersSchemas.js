import Joi from 'joi';

export const addSupplierSchema = Joi.object({
  name: Joi.string()
    .required()
    .messages({ 'any required': 'name is required' }),
  address: Joi.string()
    .required()
    .messages({ 'any required': 'address is required' }),
  suppliers: Joi.string()
    .required()
    .messages({ 'any required': 'supplier is required' }),
  date: Joi.date().required().messages({ 'any required': 'date is required' }),
  amount: Joi.string()
    .required()
    .messages({ 'any required': 'amount is required' }),
  status: Joi.string()
    .valid('Active', 'Deactive')
    .required()
    .messages({ 'any required': 'status is required' }),
});

export const updateSupplierSchema = Joi.object({
  name: Joi.string(),
  address: Joi.string(),
  suppliers: Joi.string(),
  date: Joi.string(),
  amount: Joi.string(),
  status: Joi.string(),
});
