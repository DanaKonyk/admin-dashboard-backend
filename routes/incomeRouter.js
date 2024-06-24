import express from 'express';
import { isTokenValid } from '../middlewares/isTokenValid.js';
import ctrl from '../controllers/incomeControllers.js';

const incomeRouter = express.Router();

incomeRouter.get('/', isTokenValid, ctrl.getIncome);

export default incomeRouter;
