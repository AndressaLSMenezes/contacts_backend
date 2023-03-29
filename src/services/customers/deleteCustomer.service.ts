import AppDataSource from "../../data-source";
import Customer from "../../models/customers.model";

const deleteCustomerService = async (idCustomer: string) => {
  console.log("ID CUstomer");

  console.log(idCustomer);

  const customerRepository = AppDataSource.getRepository(Customer);
  const customer = (await customerRepository.findOne({
    where: {
      id: idCustomer,
    },
  })) as Customer;

  return await customerRepository.softRemove({ id: idCustomer });
};

export { deleteCustomerService };

// const deleteUserService = async (idUser: number): Promise<void> => {
//   const userRepository: Repository<User> = AppDataSource.getRepository(User);
//   const user: User | null = await userRepository.findOne({
//     where: {
//       id: idUser,
//     },
//   });
//   await userRepository.softRemove(user!);
// };
// export default deleteUserService;
