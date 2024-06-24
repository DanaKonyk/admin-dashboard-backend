import { Order } from '../models/order.js';
import { ctrlWrapper } from '../helpers/ctrlWrapper.js';

const getOrders = async (req, res) => {
  const { page = '1', limit = '5', name } = req.query;
  const searchValue = name ? { name: { $regex: name, $options: 'i' } } : {};
  const parsedLimit = parseInt(limit);
  const parsedPage = parseInt(page);
  const skipOption = (parsedPage - 1) * parsedLimit;
  const allOrders = await Order.countDocuments(searchValue);
  const result = await Order.find(searchValue)
    .skip(skipOption)
    .limit(parsedLimit);

  res.json({ result, limit: parsedLimit, page: parsedPage, total: allOrders });
};

export default {
  getOrders: ctrlWrapper(getOrders),
};
