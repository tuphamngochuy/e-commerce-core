import { DataSource } from "typeorm";

const dataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5434,
  username: "dbo",
  password: "123456",
  database: "dbo",
});

export default dataSource;
