import { ICustomerResponse } from "./customers.interfaces";

interface IContactRequest {
  fullName: string;
  phoneNumber: string;
  email: string;
  customerId: string;
}

interface IContactResponse {
  id: string;
  fullName: string;
  phoneNumber: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

interface IContactUpdate {
  fullName?: string;
  phoneNumber?: string;
  email?: string;
}

export { IContactRequest, IContactResponse, IContactUpdate };
