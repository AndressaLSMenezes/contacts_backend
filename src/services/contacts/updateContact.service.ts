import AppDataSource from "../../data-source";
import AppError from "../../errors/appError";
import {
  IContactResponse,
  IContactUpdate,
} from "../../interfaces/contacts.interfaces";
import Contact from "../../models/contacts.model";

const updateContactService = async (
  data: IContactUpdate,
  id: string
): Promise<IContactResponse> => {
  try {
    const contactRepository = AppDataSource.getRepository(Contact);
    const contact = await contactRepository.findOneByOrFail({ id: id });

    return contact;
  } catch (error: any) {
    throw new AppError(error.message);
  }
};

export { updateContactService };
