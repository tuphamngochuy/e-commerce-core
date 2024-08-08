import BusinessException from '@common/exception/businessException';
import { EXISTED_USER, INVALID_SYSTEM_ROLE } from '@common/exception/error';
import Security from '@common/security';
import { CreatePersonDto } from '@repositories/person/dto/createPerson.dto';
import { personRepository } from '@repositories/person/person.repository';
import { CreateUserDto } from '@repositories/user/dto/createUser.dto';
import { userRepository } from '@repositories/user/user.repository';
import { SignUpInput } from '@services/user/graphql/inputs/signUpInput';
import dataSource from '@typeORM/dataSource';
import { isNil } from 'lodash';
import { UserDto } from 'src/dto/user.dto';
import { Context } from 'src/graphQL/context/type';

class UserService {
  async signUp({ input, context }: { input: SignUpInput; context: Context }) {
    const { platform } = context;
    const { username, password: rawPassword, fullName, systemRole } = input;
    const enabledPlatform = UserDto.fromPlatformToAcceptedRoles(platform);
    if (!isNil(systemRole) && !enabledPlatform.includes(systemRole)) {
      throw new BusinessException(INVALID_SYSTEM_ROLE, {
        platform,
        systemRole,
      });
    }

    const existedUser = await userRepository.findOne({
      where: {
        username,
      },
    });

    if (!isNil(existedUser)) {
      throw new BusinessException(EXISTED_USER, {
        username,
        id: existedUser.id,
      });
    }

    const { password, salt } = await Security.createPassword({ rawPassword });

    dataSource.manager.transaction(async transactionEntityManager => {
      const createPersonDto = CreatePersonDto.createPersonWithMinimumData({
        fullName,
      });
      const person = await transactionEntityManager
        .withRepository(personRepository)
        .createPerson(createPersonDto);

      const createUserDto = CreateUserDto.createUser({
        username,
        password,
        salt,
        isActive: true,
        person: {
          fullName,
          id: person.generatedMaps[0].id,
        },
      });

      await transactionEntityManager
        .withRepository(userRepository)
        .createUser(createUserDto);
    });

    return {};
  }
}

export const userService = new UserService();
