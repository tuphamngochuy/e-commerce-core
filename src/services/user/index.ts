import BusinessException from '@common/exception/businessException';
import Security from '@common/security';
import { SignUpInput } from '@inputs/signUpInput';
import { userRepository } from '@repositories/user.repository';
import { isNil } from 'lodash';
import { Context } from 'src/graphQL/context/type';

class UserService {
  async signUp({ input, context }: { input: SignUpInput; context: Context }) {
    const { username, password: rawPassword, fullName } = input;

    const existedUser = await userRepository.findOne({
      where: {
        username,
      },
    });

    if (!isNil(existedUser)) {
      throw new BusinessException('Existed User');
    }

    const hashPassword = await Security.createPassword({ rawPassword });

    userRepository.insert({
      username,
      password: hashPassword,
      isActive: true,
      userAliases: [
        {
          value: username,
          needTwoFactor: true,
          isActive: true,
        },
      ],
      person: {
        fullName,
      },
    });

    return {};
  }
}

export const userService = new UserService();
