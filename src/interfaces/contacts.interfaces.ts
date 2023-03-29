import { ICustomerResponse } from "./customers.interfaces";

interface IContactRequest {
  fullName: string;
  phoneNumber: number;
  email: string;
  customerId: string;
}

interface IContactResponse {
  id: string;
  fullName: string;
  phoneNumber: number;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

interface IContactUpdate {
  fullName?: string;
  phoneNumber?: number;
  email?: string;
}

export { IContactRequest, IContactResponse, IContactUpdate };
