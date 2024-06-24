import express from 'express';
import { isTokenValid } from '../middlewares/isTokenValid.js';
import ctrl from '../controllers/supplierControllers.js';
import { addSupplierSchema } from '../schemas/suppliersSchemas.js';
import { updateSupplierSchema } from '../schemas/suppliersSchemas.js';
import { isBodyValid } from '../middlewares/isBodyValid.js';
import { isIdValid } from '../middlewares/isIdValid.js';

const suppliersRouter = express.Router();

suppliersRouter.get('/', isTokenValid, ctrl.getSuppliers);
suppliersRouter.get('/:id', isTokenValid, isIdValid, ctrl.getSupplierById);
suppliersRouter.post(
  '/',
  isTokenValid,
  isBodyValid(addSupplierSchema),
  ctrl.addSupplier
);
suppliersRouter.put(
  '/:id',
  isTokenValid,
  isBodyValid(updateSupplierSchema),
  ctrl.updateSupplier
);

export default suppliersRouter;
