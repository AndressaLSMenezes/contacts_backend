import { Request, Response } from 'express';
import { createContactService } from '../services/contacts/createContact.service';
import { deleteContactService } from '../services/contacts/deleteContact.service';
import { getAllContactsService } from '../services/contacts/getAllContacts.service';
import { getByIdContactService } from '../services/contacts/getByIdContact.service';
import { updateContactService } from '../services/contacts/updateContact.service';
import { getAllContactsByCustomerService } from '../services/contacts/getAllContactsByCustomerId.service';

const createContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { body } = req;
  const data = await createContactService(body);
  return res.status(201).send(data);
};

const getAllContactsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data = await getAllContactsService();
  return res.status(200).send(data);
};

const getAllContactsByCustomerIdController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const {id} = req.params
  const data = await getAllContactsByCustomerService(id);
  return res.status(200).send(data);
};

const getByIdContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  const data = await getByIdContactService(id);
  return res.status(200).send(data);
};

const deleteContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  const data = await deleteContactService(id);
  return res.status(200).send();
};

const updateContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { body, params } = req;
  const data = await updateContactService(body, params.id);
  return res.status(200).send(data);
};

export {
  createContactController,
  getAllContactsController,
  getByIdContactController,
  deleteContactController,
  updateContactController,
  getAllContactsByCustomerIdController
};
