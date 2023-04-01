import "dotenv/config";
import { DataSource } from "typeorm";
import path from "path";
import Customer from "./models/customers.model";
import Contact from "./models/contacts.model";


const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.PGHOST,
  port: parseInt(process.env.PGPORT!),
  username: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  logging: true,
  synchronize: false,
  entities: [Customer, Contact],
  migrations: [path.join(__dirname, "./migrations/**.{js,ts}")],
});

export default AppDataSource;
