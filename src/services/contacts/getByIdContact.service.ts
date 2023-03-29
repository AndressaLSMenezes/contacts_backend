import AppDataSource from "../../data-source";
import AppError from "../../errors/appError";
import { IContactResponse } from "../../interfaces/contacts.interfaces";
import Contact from "../../models/contacts.model";

const getByIdContactService = async (id: string): Promise<IContactResponse> => {
  try {
    const contactRepository = AppDataSource.getRepository(Contact);
    const contact = await contactRepository.findOneByOrFail({ id: id });

    return contact;
  } catch (error: any) {
    throw new AppError(error.message);
  }
};
export { getByIdContactService };
