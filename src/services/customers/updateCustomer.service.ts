import AppDataSource from "../../data-source";
import AppError from "../../errors/appError";
import {
  ICustomerResponse,
  ICustomerRequest,
} from "../../interfaces/customers.interfaces";
import Customer from "../../models/customers.model";

const updateCustomerService = async (data: ICustomerRequest, id: string) => {
  try {
    const customerRepository = AppDataSource.getRepository(Customer);
    const updatedCustomer = await customerRepository.update(id, data);

    return updatedCustomer;
  } catch (error: any) {
    console.log(error);

    throw new AppError(error.message);
  }
};

// const update = async (requestData: ICustomerRequest, id: string): Promise<ICustomerResponse> => {
//   try {
//     const customerRepository = AppDataSource.getRepository(Customer);
//     const updatedCustomer = await customerRepository.update(id, requestData);
//     return updatedCustomer;
//   } catch (error) {
//     // handle specific errors, or just re-throw the error if it's unexpected
//     throw error;
//   }
// };

export { updateCustomerService };
