import { NextFunction, Request, Response } from 'express';
import AppDataSource from '../data-source';
import Customer from '../models/customers.model';
import AppError from '../errors/appError';

const validatedCustomerIdMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id || req.body.customerId;
    const customerRepository = AppDataSource.getRepository(Customer);
    const customer = await customerRepository.findOneByOrFail({ id: id });

    if (!customer) {
      throw new AppError('Invalid ID');
    }

    return next()
  } catch (error: any) {
    next(error);
  }
};
export { validatedCustomerIdMiddleware };
