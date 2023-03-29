import { Request, Response } from "express";
import { createContactService } from "../services/contacts/createContact.service";
import { deleteContactService } from "../services/contacts/deleteContact.service";
import { getAllContactsService } from "../services/contacts/getAllContacts.service";
import { getByIdContactService } from "../services/contacts/getByIdContact.service";
import { updateContactService } from "../services/contacts/updateContact.service";

const createContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { body } = req;
  const data = createContactService(body);
  return res.status(201).send(data);
};

const getAllContactsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data = getAllContactsService();
  return res.status(200).send(data);
};

const getByIdContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  const data = getByIdContactService(id);
  return res.status(200).send(data);
};

const deleteContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  const data = deleteContactService(id);
  return res.status(200).send(data);
};

const updateContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { body, params } = req;
  const data = updateContactService(body, params.id);
  return res.status(200).send(data);
};

export {
  createContactController,
  getAllContactsController,
  getByIdContactController,
  deleteContactController,
  updateContactController,
};
