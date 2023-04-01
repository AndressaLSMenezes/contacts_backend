import { Router } from 'express';
import {
  createContactController,
  deleteContactController,
  getAllContactsController,
  getByIdContactController,
  updateContactController,
  getAllContactsByCustomerIdController,
} from '../controllers/contacts.controllers';
import validatedDataMiddleware from '../middlewares/validateData.middleware';
import {
  contactRequestSchema,
  contactUpdateSchema,
} from '../schemas/contacts.schema';
import { validatedContactIdMiddleware } from '../middlewares/validatedContactId.middleware';
import { validatedCustomerIdMiddleware } from '../middlewares/validatedCustomerId.middleware';

const contactRouter = Router();

contactRouter.post(
  '/',
  validatedDataMiddleware(contactRequestSchema),
  validatedCustomerIdMiddleware,
  createContactController
);
contactRouter.get('/:id', getByIdContactController);
contactRouter.get(
  '/custumer/:id',
  validatedCustomerIdMiddleware,
  getAllContactsByCustomerIdController
);

contactRouter.patch(
  '/:id',
  validatedDataMiddleware(contactUpdateSchema),
  validatedContactIdMiddleware,
  updateContactController
);
contactRouter.delete(
  '/:id',
  validatedContactIdMiddleware,
  deleteContactController
);
contactRouter.get('/', getAllContactsController);

export { contactRouter };
