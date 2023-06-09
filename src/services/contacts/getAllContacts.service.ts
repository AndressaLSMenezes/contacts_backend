import AppDataSource from '../../data-source';
import { IContactResponse } from '../../interfaces/contacts.interfaces';
import Contact from '../../models/contacts.model';

const getAllContactsService = async (): Promise<IContactResponse[]> => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const contacts = await contactRepository.find({
    relations: {
      customer: true,
    },
  });

  return contacts;
};
export { getAllContactsService };
