import express from 'express';
import { isTokenValid } from '../middlewares/isTokenValid.js';
import ctrl from '../controllers/orderControllers.js';

const orderRouter = express.Router();

orderRouter.get('/', isTokenValid, ctrl.getOrders);

export default orderRouter;
