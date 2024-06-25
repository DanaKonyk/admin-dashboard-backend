import express from 'express';
import { isTokenValid } from '../middlewares/isTokenValid.js';
import ctrl from '../controllers/dashboardControllers.js';

const dashboardRouter = express.Router();

dashboardRouter.get('/', isTokenValid, ctrl.getDashboardData);

export default dashboardRouter;
