import express from 'express';
import { isBodyValid } from '../middlewares/isBodyValid.js';
import {isTokenValid} from '../middlewares/isTokenValid.js';
import { registerSchema } from '../schemas/userSchemas.js';
import ctrl from '../controllers/authControllers.js';

const authRouter = express.Router();

authRouter.post('/register', isBodyValid(registerSchema), ctrl.register);
authRouter.post('/login', isBodyValid(registerSchema), ctrl.login);
authRouter.post('/logout', isTokenValid, ctrl.logout);
authRouter.get('/current', isTokenValid, ctrl.getCurrent);

export default authRouter;
