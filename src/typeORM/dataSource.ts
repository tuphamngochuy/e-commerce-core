import { Action } from '@entities/action.entity';
import { Cart } from '@entities/cart.entity';
import { Category } from '@entities/category.entity';
import { Invoice } from '@entities/invoice.entity';
import { Item } from '@entities/item.entity';
import { Permission } from '@entities/permission.entity';
import { Person } from '@entities/person.entity';
import { Product } from '@entities/product.entity';
import { Role } from '@entities/role.entity';
import { Shop } from '@entities/shop.entity';
import { SystemRole } from '@entities/systemRole.entity';
import { User } from '@entities/user.entity';
import { UserAlias } from '@entities/userAlias.entity';
import { UserInSystemRole } from '@entities/userInSystemRole.entity';
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
    SystemRole,
    UserInSystemRole,
    Shop,
    Cart,
    Category,
    Item,
    Product,
    Invoice,
  ],
});

export default dataSource;
