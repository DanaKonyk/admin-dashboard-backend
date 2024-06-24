import { Supplier } from '../models/supplier.js';
import { ctrlWrapper } from '../helpers/ctrlWrapper.js';
import HttpError from '../helpers/HttpError.js';
import dayjs from 'dayjs';

const getSuppliers = async (req, res) => {
  const { page = '1', limit = '5', name } = req.query;
  const searchValue = name ? { name: { $regex: name, $options: 'i' } } : {};
  const parsedLimit = parseInt(limit);
  const parsedPage = parseInt(page);
  const skipOption = (parsedPage - 1) * parsedLimit;
  const allSuppliers = await Supplier.countDocuments(searchValue);
  const result = await Supplier.find(searchValue)
    .skip(skipOption)
    .limit(parsedLimit);

  res.json({
    result,
    limit: parsedLimit,
    page: parsedPage,
    total: allSuppliers,
  });
};

const getSupplierById = async (req, res) => {
  const { id } = req.params;
  const result = await Supplier.findById(id);
  if (!result) {
    throw HttpError(404);
  }
  res.json(result);
};

const addSupplier = async (req, res) => {
  const result = await Supplier.create({ ...req.body });
  res.status(201).json(result);
};

const updateSupplier = async (req, res) => {
  const { id } = req.params;
  const result = await Supplier.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) {
    throw HttpError(404);
  }

  const date = dayjs(result.date);
  const formatDate = date.format('MMMM D, YYYY');
  result.date = formatDate;
  res.json(result);
};

export default {
  getSuppliers: ctrlWrapper(getSuppliers),
  getSupplierById: ctrlWrapper(getSupplierById),
  addSupplier: ctrlWrapper(addSupplier),
  updateSupplier: ctrlWrapper(updateSupplier),
};
