import AppDataSource from "../../data-source";
import { IContactResponse } from "../../interfaces/contacts.interfaces";
import Contact from "../../models/contacts.model";

const getAllContactsService = async (): Promise<IContactResponse[]> => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const contacts = await contactRepository.find();

  return contacts;
};
export { getAllContactsService };
