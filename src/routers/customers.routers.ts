import { Router } from 'express';
import {
  createCustomerController,
  deleteCustomerController,
  getAllCustomersController,
  getByIdCustomerController,
  updateCustomerController,
} from '../controllers/customers.controllers';
import validatedDataMiddleware from '../middlewares/validateData.middleware';
import {
  customerRequestSchema,
  customerUpdateSchema,
} from '../schemas/customers.schema';
import { validatedCustomerIdMiddleware } from '../middlewares/validatedCustomerId.middleware';

const customerRouter = Router();

customerRouter.post(
  '/',
  validatedDataMiddleware(customerRequestSchema),
  createCustomerController
);
customerRouter.get(
  '/:id',
  validatedCustomerIdMiddleware,
  getByIdCustomerController
);
customerRouter.patch(
  '/:id',
  validatedDataMiddleware(customerUpdateSchema),
  validatedCustomerIdMiddleware,
  updateCustomerController
);
customerRouter.delete(
  '/:id',
  validatedCustomerIdMiddleware,
  deleteCustomerController
);
customerRouter.get('/', getAllCustomersController);

export { customerRouter };
