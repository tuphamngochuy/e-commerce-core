import BusinessException from '@common/exception/businessException';
import { EXISTED_USER, INVALID_SYSTEM_ROLE } from '@common/exception/error';
import Security from '@common/security';
import { SignUpInput } from '@inputs/signUpInput';
import { userRepository } from '@repositories/user.repository';
import dataSource from '@typeORM/dataSource';
import { isNil } from 'lodash';
import { UserDto } from 'src/dto/user.dto';
import { Context } from 'src/graphQL/context/type';

class UserService {
  async signUp({ input, context }: { input: SignUpInput; context: Context }) {
    const { platform } = context;
    const { username, password: rawPassword, fullName, systemRole } = input;
    const enabledPlatform = UserDto.fromPlatformToAcceptedRoles(platform);
    if (!enabledPlatform.includes(systemRole)) {
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
      transactionEntityManager.withRepository(userRepository).insert({
        username,
        password,
        salt,
        isActive: true,
        userAliases: [
          {
            value: username,
            isActive: true,
          },
        ],
        person: {
          fullName,
        },
      });
    });

    return {};
  }
}

export const userService = new UserService();
