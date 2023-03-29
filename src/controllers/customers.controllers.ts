import { NextFunction, Request, Response } from "express";
import { createCustomerService } from "../services/customers/createCustomer.service";
import { deleteCustomerService } from "../services/customers/deleteCustomer.service";
import { getAllCustomersService } from "../services/customers/getAllCustomers.service";
import { getByIdCustomerService } from "../services/customers/getByIdCustomer.service";
import { updateCustomerService } from "../services/customers/updateCustomer.service";

const createCustomerController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { body } = req;
  const data = await createCustomerService(body);
  return res.status(201).send(data);
};

const getAllCustomersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data = await getAllCustomersService();
  return res.status(200).send(data);
};

const getByIdCustomerController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  const data = await getByIdCustomerService(id);
  return res.status(200).send(data);
};

const deleteCustomerController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  await deleteCustomerService(id);
  return res.status(204);
};

const updateCustomerController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { body, params } = req;
  const data = await updateCustomerService(body, params.id);
  return res.status(200).send(data);
};

export {
  createCustomerController,
  getAllCustomersController,
  getByIdCustomerController,
  deleteCustomerController,
  updateCustomerController,
};
