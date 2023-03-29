import * as yup from "yup";
import { Schema } from "yup";
import {
  IContactRequest,
  IContactResponse,
  IContactUpdate,
} from "../interfaces/contacts.interfaces";

const contactRequestSchema: Schema<IContactRequest> = yup.object().shape({
  id: yup.string(),
  fullName: yup.string().required("Nome é obrigatório"),
  email: yup
    .string()
    .email("Formato de email invalido")
    .required("Email é obrigatório"),
  phoneNumber: yup.string().required("Telefone é obrigatório"),
  customerId: yup.string().required("custumerId é obrigatório"),
});

const contactSchema: Schema<IContactResponse> = yup.object().shape({
  id: yup.string().required(),
  fullName: yup.string().required("Nome é obrigatório"),
  email: yup
    .string()
    .email("Formato de email invalido")
    .required("Email é obrigatório"),
  phoneNumber: yup.string().required("Telefone é obrigatório"),
  createdAt: yup.date().required(),
  updatedAt: yup.date().required(),
  customerId: yup.string().required("custumerId é obrigatório"),
});

const contactUpdateSchema: Schema<IContactUpdate> = yup.object().shape({
  fullName: yup.string(),
  email: yup.string().email("Formato de email invalido"),
  phoneNumber: yup.string(),
});

export { contactRequestSchema, contactSchema, contactUpdateSchema };
