import { IContactResponse } from "./contacts.interfaces";

interface ICustomerRequest {
  fullName: string;
  phoneNumber: number;
  email: string;
}

interface ICustomerResponse {
  fullName: string;
  phoneNumber: number;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  contacts: IContactResponse[];
}

interface ICustomerUpdate {
  fullName?: string;
  phoneNumber?: number;
  email?: string;
}

export type { ICustomerRequest, ICustomerResponse, ICustomerUpdate };
