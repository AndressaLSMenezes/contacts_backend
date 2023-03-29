import { Router } from "express";
import {
  createContactController,
  deleteContactController,
  getAllContactsController,
  getByIdContactController,
  updateContactController,
} from "../controllers/contacts.controllers";
import validatedDataMiddleware from "../middlewares/validateData.middleware";
import {
  contactRequestSchema,
  contactUpdateSchema,
} from "../schemas/contacts.schema";

const contactRouter = Router();

contactRouter.post(
  "/",
  validatedDataMiddleware(contactRequestSchema),
  createContactController
);
contactRouter.get("/:id", getByIdContactController);
contactRouter.patch(
  "/:id",
  validatedDataMiddleware(contactUpdateSchema),
  updateContactController
);
contactRouter.delete("/:id", deleteContactController);
contactRouter.get("/", getAllContactsController);

export { contactRouter };
