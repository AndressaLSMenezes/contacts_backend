import AppDataSource from '../../data-source';
import Contact from '../../models/contacts.model';
import AppError from '../../errors/appError';
import {
  IContactRequest,
  IContactResponse,
} from '../../interfaces/contacts.interfaces';
import Customer from '../../models/customers.model';

const createContactService = async (
  data: IContactRequest
): Promise<IContactResponse> => {
  const { fullName, email, phoneNumber, customerId } = data;
  const customerRepository = AppDataSource.getRepository(Customer);

  const customer = (await customerRepository.findOne({
    where: {
      id: customerId,
    },
  })) as Customer;

  const contactRepository = AppDataSource.getRepository(Contact);
  const verifyEmailExists = await contactRepository.findOneBy({
    email: email,
    customer: {
      id: customerId,
    },
  });
  if (verifyEmailExists) {
    throw new AppError('Contact alredy exists.', 409);
  }

  const createdContact = contactRepository.create({
    fullName: fullName,
    email: email,
    phoneNumber: phoneNumber,
    customer: customer,
  });
  const returned = await contactRepository.save(createdContact);

  return returned;
};
export { createContactService };
