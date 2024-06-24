import { Product } from '../models/product.js';
import { ctrlWrapper } from '../helpers/ctrlWrapper.js';
import HttpError from '../helpers/HttpError.js';

const getProducts = async (req, res) => {
  const { page = '1', limit = '5', name } = req.query;
  const searchValue = name ? { name: { $regex: name, $options: 'i' } } : {};
  const parsedLimit = parseInt(limit);
  const parsedPage = parseInt(page);
  const skipOption = (parsedPage - 1) * parsedLimit;
  const allProducts = await Product.countDocuments(searchValue);
  const result = await Product.find(searchValue)
    .skip(skipOption)
    .limit(parsedLimit);

  res.json({
    result,
    limit: parsedLimit,
    page: parsedPage,
    total: allProducts,
  });
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  const result = await Product.findById(id);
  if (!result) {
    throw HttpError(404);
  }
  res.json(result);
};

const addProduct = async (req, res) => {
  const result = await Product.create({ ...req.body });
  res.status(201).json(result);
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const result = await Product.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) {
    throw HttpError(404);
  }
  res.json(result);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const result = await Product.findByIdAndDelete(id);
  if (!result) {
    throw HttpError(404);
  }
  res.json({ message: 'Successfully deleted' });
};

export default {
  getProducts: ctrlWrapper(getProducts),
  getProductById: ctrlWrapper(getProductById),
  addProduct: ctrlWrapper(addProduct),
  updateProduct: ctrlWrapper(updateProduct),
  deleteProduct: ctrlWrapper(deleteProduct),
};
