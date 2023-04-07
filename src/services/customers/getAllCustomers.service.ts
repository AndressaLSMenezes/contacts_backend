import AppDataSource from '../../data-source';
import { ICustomerResponse } from '../../interfaces/customers.interfaces';
import Customer from '../../models/customers.model';

const getAllCustomersService = async (): Promise<ICustomerResponse[]> => {
  const customerRepository = AppDataSource.getRepository(Customer);
  const customers = await customerRepository.find({
    relations: {
      contacts: true,
    },
  });

  return customers;
};
export { getAllCustomersService };
