import { Customer } from '../models/customer.js';
import { Income } from '../models/income.js';
import { Product } from '../models/product.js';
import { Supplier } from '../models/supplier.js';
import { ctrlWrapper } from '../helpers/ctrlWrapper.js';

const getDashboardData = async (_, res) => {
  const allSCustomers = await Customer.countDocuments();
  const allSProducts = await Product.countDocuments();
  const allSuppliers = await Supplier.countDocuments();
  const recentCustomers = await (
    await Customer.find()
  ).splice(allSCustomers - 5, allSCustomers);
  const incomeExpences = await Income.find();

  res.json({
    allSCustomers,
    allSProducts,
    allSuppliers,
    recentCustomers,
    incomeExpences,
  });
};

export default {
  getDashboardData: ctrlWrapper(getDashboardData),
};
