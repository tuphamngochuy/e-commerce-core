import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5434,
  username: 'dbo',
  password: '123456',
  database: 'dbo',
  synchronize: false,
  migrations: ['src/typeORM/migrations/*.ts'],
  metadataTableName: 'metadata',
  entities: ['src/typeORM/entities/*/*.ts'],
});
