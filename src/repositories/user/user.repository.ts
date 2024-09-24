import { type ListQueryParam } from '@common/type/list';
import { User } from '@entities/actualEntities/user.entity';
import { TCreateUserDto } from '@repositories/user/dto/createUser.dto';
import dataSource from '@typeORM/dataSource';
import { Repository } from 'typeorm';

export class UserRepository extends Repository<User> {
  createUser(createDto: TCreateUserDto) {
    return this.insert(createDto);
  }

  async getUsers({ input }: { input: ListQueryParam }) {
    return {
      rows: await this.find({
        ...input,
      }),
      count: await this.count(),
    };
  }
}

export const userRepository = new UserRepository(User, dataSource.manager);
