import express from 'express';
import { isTokenValid } from '../middlewares/isTokenValid.js';
import { isIdValid } from '../middlewares/isIdValid.js';
import ctrl from '../controllers/customerControllers.js';

const customersRouter = express.Router();

customersRouter.get('/', isTokenValid, ctrl.getAllCustomers);
customersRouter.get('/:id', isTokenValid, isIdValid, ctrl.getCustomerById);

export default customersRouter;
