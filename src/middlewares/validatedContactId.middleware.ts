import { NextFunction, Request, Response } from 'express';
import AppDataSource from '../data-source';
import Contact from '../models/contacts.model';
import AppError from '../errors/appError';

const validatedContactIdMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const contactRepository = AppDataSource.getRepository(Contact);
    const contact = await contactRepository.findOneByOrFail({ id: id });

    if (!contact) {
      throw new AppError('Invalid ID');
    }
    return next();
  } catch (error: any) {
    next(error);
  }
};
export { validatedContactIdMiddleware };
