import * as yup from 'yup';
import { Schema } from 'yup';
import {
  ICustomerRequest,
  ICustomerResponse,
  ICustomerUpdate,
} from '../interfaces/customers.interfaces';
import { IContactResponse } from '../interfaces/contacts.interfaces';

const customerRequestSchema: Schema<ICustomerRequest> = yup.object().shape({
  id: yup.string(),
  fullName: yup.string().required('Nome é obrigatório'),
  email: yup
    .string()
    .email('Formato de email invalido')
    .required('Email é obrigatório'),
  phoneNumber: yup.string().required('Telefone é obrigatório'),
});

const customerContactSchema: Schema<ICustomerRequest> = yup.object().shape({
  id: yup.string(),
  fullName: yup.string().required('Nome é obrigatório'),
  email: yup
    .string()
    .email('Formato de email invalido')
    .required('Email é obrigatório'),
  phoneNumber: yup.string().required('Telefone é obrigatório'),
  createdAt: yup.date().required('Data de criação é obrigatória'),
  updatedAt: yup.date().required('Data de atualização é obrigatória'),
});

// const customerSchema: Schema<ICustomerResponse> = yup.object().shape({
//   fullName: yup.string().required("Nome é obrigatório"),
//   phoneNumber: yup.string().required("Telefone é obrigatório"),
//   email: yup
//     .string()
//     .email("Formato de email inválido")
//     .required("Email é obrigatório"),
//   createdAt: yup.date().required("Data de criação é obrigatória"),
//   updatedAt: yup.date().required("Data de atualização é obrigatória"),
//   contacts: yup
//     .array()
//     .of(
//       yup.object().shape({
//         id: yup.string().required("ID é obrigatório"),
//         fullName: yup.string().required("Nome é obrigatório"),
//         phoneNumber: yup.string().required("Telefone é obrigatório"),
//         email: yup
//           .string()
//           .email("Formato de email inválido")
//           .required("Email é obrigatório"),
//         createdAt: yup.date().required("Data de criação é obrigatória"),
//         updatedAt: yup.date().required("Data de atualização é obrigatória"),
//         customer: yup.object()
//       })
//     )
//     .default([] as IContactResponse[]),
// });

const customerUpdateSchema: Schema<ICustomerUpdate> = yup.object().shape({
  fullName: yup.string(),
  email: yup.string().email('Formato de email invalido'),
  phoneNumber: yup.string(),
});

export { customerRequestSchema, customerUpdateSchema, customerContactSchema};
