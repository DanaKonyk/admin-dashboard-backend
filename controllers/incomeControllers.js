import { Income } from '../models/income.js';
import { ctrlWrapper } from '../helpers/ctrlWrapper.js';

const getIncome = async (req, res) => {
  const { page = '1', limit = '5' } = req.query;
  const parsedLimit = parseInt(limit);
  const parsedPage = parseInt(page);
  const skipOption = (parsedPage - 1) * parsedLimit;

  const result = await Income.find().skip(skipOption).limit(parsedLimit);
  res.json(result);
};

export default {
  getIncome: ctrlWrapper(getIncome),
};
