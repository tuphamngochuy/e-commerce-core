import { User } from '@entities/user.entity';
import dataSource from '@typeORM/dataSource';
import { Repository } from 'typeorm';

class UserRepository extends Repository<User> {}

export const userRepository = new UserRepository(User, dataSource.manager);
