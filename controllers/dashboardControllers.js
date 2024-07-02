import { Customer } from '../models/customer.js';
import { Income } from '../models/income.js';
import { Product } from '../models/product.js';
import { Supplier } from '../models/supplier.js';
import { ctrlWrapper } from '../helpers/ctrlWrapper.js';

const getDashboardData = async (_, res) => {
  const allCustomers = await Customer.countDocuments();
  const allProducts = await Product.countDocuments();
  const allSuppliers = await Supplier.countDocuments();
  const recentCustomers = await (
    await Customer.find()
  ).splice(allCustomers - 5, allCustomers);
  const incomeExpences = await Income.find();

  res.json({
    allCustomers,
    allProducts,
    allSuppliers,
    recentCustomers,
    incomeExpences,
  });
};

export default {
  getDashboardData: ctrlWrapper(getDashboardData),
};
