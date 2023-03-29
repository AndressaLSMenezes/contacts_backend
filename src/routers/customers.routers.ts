import { Router } from "express";
import {
  createCustomerController,
  deleteCustomerController,
  getAllCustomersController,
  getByIdCustomerController,
  updateCustomerController,
} from "../controllers/customers.controllers";
import validatedDataMiddleware from "../middlewares/validateData.middleware";
import {
  customerRequestSchema,
  customerUpdateSchema,
} from "../schemas/customers.schema";

const customerRouter = Router();

customerRouter.post(
  "/",
  validatedDataMiddleware(customerRequestSchema),
  createCustomerController
);
customerRouter.get("/:id", getByIdCustomerController);
customerRouter.patch(
  "/:id",
  validatedDataMiddleware(customerUpdateSchema),
  updateCustomerController
);
customerRouter.delete("/:id", deleteCustomerController);
customerRouter.get("/", getAllCustomersController);

export { customerRouter };
