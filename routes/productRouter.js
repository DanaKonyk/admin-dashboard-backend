import express from 'express';
import { isTokenValid } from '../middlewares/isTokenValid.js';
import ctrl from '../controllers/productControllers.js';
import { addProductSchema } from '../schemas/productSchemas.js';
import { updateProductSchema } from '../schemas/productSchemas.js';
import { isBodyValid } from '../middlewares/isBodyValid.js';
import { isIdValid } from '../middlewares/isIdValid.js';

const productsRouter = express.Router();

productsRouter.get('/', isTokenValid, ctrl.getProducts);
productsRouter.get('/:id', isTokenValid, isIdValid, ctrl.getProductById);
productsRouter.post(
  '/',
  isTokenValid,
  isBodyValid(addProductSchema),
  ctrl.addProduct
);
productsRouter.put(
  '/:id',
  isTokenValid,
  isBodyValid(updateProductSchema),
  ctrl.updateProduct
);
productsRouter.delete('/:id', isTokenValid, isIdValid, ctrl.deleteProduct);

export default productsRouter;
