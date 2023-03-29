import AppDataSource from "../../data-source";
import Contact from "../../models/contacts.model";
import AppError from "../../errors/appError";
import {
  IContactRequest,
  IContactResponse,
} from "../../interfaces/contacts.interfaces";

const createContactService = async (
  data: IContactRequest
): Promise<IContactResponse> => {
    const { email } = data;
    const contactRepository = AppDataSource.getRepository(Contact);
    const verifyEmailExists = await contactRepository.findOneBy({
      email: email,
    });
    if (verifyEmailExists) {
      throw new AppError("Contact alredy exists");
    }
    console.log(data);
    console.log("------------HERE------------");

    const createdContact = contactRepository.create(data);
    const returned = await contactRepository.save(createdContact);

    return returned;

  }
export { createContactService };
