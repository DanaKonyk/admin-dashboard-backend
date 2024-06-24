import { Customer } from '../models/customer.js';
import { ctrlWrapper } from '../helpers/ctrlWrapper.js';
import HttpError from '../helpers/HttpError.js';

const getAllCustomers = async (req, res) => {
  const { page = '1', limit = '5', name } = req.query;
  const searchValue = name ? { name: { $regex: name, $options: 'i' } } : {};
  const parsedLimit = parseInt(limit);
  const parsedPage = parseInt(page);
  const skipOption = (parsedPage - 1) * parsedLimit;
  const allCustomers = await Customer.countDocuments(searchValue);
  const result = await Customer.find(searchValue)
    .skip(skipOption)
    .limit(parsedLimit);

  res.json({
    result,
    limit: parsedLimit,
    page: parsedPage,
    total: allCustomers,
  });
};

const getCustomerById = async (req, res) => {
  const { id } = req.params;
  const customer = await Customer.findById(id);
  if (!customer) {
    throw HttpError(404);
  }
  res.json(customer);
};

export default {
  getAllCustomers: ctrlWrapper(getAllCustomers),
  getCustomerById: ctrlWrapper(getCustomerById),
};
