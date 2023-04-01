import AppDataSource from '../../data-source';
import Contact from '../../models/contacts.model';

const getAllContactsByCustomerService = async (customerId: string) => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const contacts = await contactRepository.find({
    where: {
      customer: {
        id: customerId,
      },
    },
  });

  return contacts;
};
export { getAllContactsByCustomerService };
