import AppDataSource from "../../data-source";
import AppError from "../../errors/appError";
import Contact from "../../models/contacts.model";

const deleteContactService = async (id: string) => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const contact = await contactRepository.find({
    where: { id: id },
    withDeleted: true,
  });

  if (!contact[0].deletedAt) {
    throw new AppError("Contact already delete", 400);
  }

  await contactRepository.softDelete(id);
};

export { deleteContactService };
