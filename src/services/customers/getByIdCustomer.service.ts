import AppDataSource from "../../data-source";
import AppError from "../../errors/appError";
import { ICustomerResponse } from "../../interfaces/customers.interfaces";
import Customer from "../../models/customers.model";

const getByIdCustomerService = async (
  id: string
): Promise<ICustomerResponse> => {
  try {
    const customerRepository = AppDataSource.getRepository(Customer);
    const customer = await customerRepository.findOneByOrFail({ id: id });

    return customer;
  } catch (error: any) {
    throw new AppError(error.message);
  }
};
export { getByIdCustomerService };
