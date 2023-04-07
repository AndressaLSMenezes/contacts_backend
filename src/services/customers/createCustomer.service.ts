import AppDataSource from "../../data-source";
import Customer from "../../models/customers.model";
import AppError from "../../errors/appError";
import {
  ICustomerRequest,
  ICustomerResponse,
} from "../../interfaces/customers.interfaces";

const createCustomerService = async (
  data: ICustomerRequest
): Promise<ICustomerResponse> => {
  const { email } = data;
  const customerRepository = AppDataSource.getRepository(Customer);
  const verifyEmailExists = await customerRepository.findOneBy({
    email: email,
  });

  if (verifyEmailExists) {
    throw new AppError("Email already registered.", 409);
  }

  const createdCustomer = customerRepository.create(data);
  const returned = await customerRepository.save(createdCustomer);

  return returned;
};

export { createCustomerService };
