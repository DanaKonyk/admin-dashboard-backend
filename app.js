import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';

import authRouter from './routes/authRouter.js';
import customersRouter from './routes/customerRouter.js';
import incomeRouter from './routes/incomeRouter.js';
import orderRouter from './routes/orderRouter.js';
import productsRouter from './routes/productRouter.js';
import suppliersRouter from './routes/supplierRouter.js';

dotenv.config();
const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());

app.use('/api/users', authRouter);
app.use('/api/customers', customersRouter);
app.use('/api/income', incomeRouter);
app.use('/api/orders', orderRouter);
app.use('/api/products', productsRouter);
app.use('/api/suppliers', suppliersRouter);

app.use((_, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.use((err, req, res, next) => {
  console.error('Error handler:', err);
  const { status = 500, message = 'Server error' } = err;
  res.status(status).json({ message });
});

export default app;
