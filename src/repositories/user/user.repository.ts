import { User } from '@entities/user.entity';
import { TCreateUserDto } from '@repositories/user/dto/createUser.dto';
import dataSource from '@typeORM/dataSource';
import { Repository } from 'typeorm';

export class UserRepository extends Repository<User> {
  createUser(createDto: TCreateUserDto) {
    return this.insert(createDto);
  }
}

export const userRepository = new UserRepository(User, dataSource.manager);
