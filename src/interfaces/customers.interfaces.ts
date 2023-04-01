import { IContactResponse } from "./contacts.interfaces";

interface ICustomerRequest {
  fullName: string;
  phoneNumber: string;
  email: string;
}

interface ICustomerResponse {
  fullName: string;
  phoneNumber: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

interface ICustomerUpdate {
  fullName?: string;
  phoneNumber?: string;
  email?: string;
}

export type { ICustomerRequest, ICustomerResponse, ICustomerUpdate };
