import AppDataSource from "../../data-source";
import Customer from "../../models/customers.model";

const deleteCustomerService = async (id: string): Promise<void> => {
  const customerRepository = AppDataSource.getRepository(Customer);
  try {
    const customer = await customerRepository.findOne({
      where: {
        id: id,
      },
    });

    await customerRepository.softDelete(customer!);
  } catch (error) {
    console.error(error);
  }
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
