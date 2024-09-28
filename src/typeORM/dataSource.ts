import * as dotenv from 'dotenv';
import { DataSource } from 'typeorm';
dotenv.config();

export default new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: `${process.env.DB_USERNAME}`,
  password: `${process.env.DB_PASSWORD}`,
  database: process.env.DB_NAME,
  synchronize: false,
  migrations: ['src/typeORM/migrations/*.ts'],
  metadataTableName: 'metadata',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
});
