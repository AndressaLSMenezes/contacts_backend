import 'reflect-metadata';
import 'express-async-errors';
import express from 'express';
import handleAppError from './errors/handleAppError';
import cors from 'cors';
import { contactRouter } from './routers/contacts.routers';
import { customerRouter } from './routers/customers.routers';

const app = express();
app.use(express.json());
app.use(cors());

app.use('/customers', customerRouter);
app.use('/contacts', contactRouter);

app.use(handleAppError);

export default app;
