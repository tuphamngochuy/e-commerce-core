import { TPersonInput } from '@entities/person.entity';
import { TUserInput } from '@entities/user.entity';
import * as Yup from 'yup';

export interface ICreateUserWithMinimumData
  extends Pick<TUserInput, 'username'> {
  person: Pick<TPersonInput, 'fullName' | 'id'>;
}

export interface ICreateUser
  extends Pick<TUserInput, 'username' | 'isActive' | 'password' | 'salt'> {
  person: Pick<TPersonInput, 'fullName' | 'id'>;
}

const { object, string, boolean } = Yup;

const CREATE_USER_WITH_MINIMUM_DATA: Yup.ObjectSchema<ICreateUserWithMinimumData> =
  object({
    username: string().required(),
    person: object({
      fullName: string().required(),
      id: string().uuid().required(),
    }).noUnknown(),
  }).noUnknown();

const CREATE_USER: Yup.ObjectSchema<ICreateUser> = object({
  username: string().required(),
  isActive: boolean().required(),
  password: string().required(),
  salt: string().required(),
  person: object({
    fullName: string().required(),
    id: string().uuid().required(),
  }).noUnknown(),
});

export class CreateUserDto {
  static createUserWithMinimumData(data: ICreateUserWithMinimumData) {
    return CREATE_USER_WITH_MINIMUM_DATA.validateSync({
      data,
    });
  }

  static createUser(data: ICreateUser) {
    return CREATE_USER.validateSync(data);
  }
}

export type TCreateUserDto = ICreateUser | ICreateUserWithMinimumData;
