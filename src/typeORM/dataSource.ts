import { Action } from '@entities/action.entity';
import { Permission } from '@entities/permission.entity';
import { Person } from '@entities/person.entity';
import { Role } from '@entities/role.entity';
import { User } from '@entities/user.entity';
import { UserAlias } from '@entities/userAlias.entity';
import { UserInWorkgroup } from '@entities/userInWorkgroup.entity';
import { Workgroup } from '@entities/workgroup.entity';
import { DataSource } from 'typeorm';

const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5434,
  username: 'dbo',
  password: '123456',
  database: 'dbo',
  synchronize: true,
  schema: 'public',
  entities: [
    Action,
    Permission,
    Person,
    Role,
    User,
    UserAlias,
    UserInWorkgroup,
    Workgroup,
  ],
});

export default dataSource;
