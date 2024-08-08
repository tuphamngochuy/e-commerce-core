import { UUID } from 'crypto';
import * as Yup from 'yup';

declare module 'yup' {
  // @ts-ignore
  interface StringSchema<
    TType extends Yup.Maybe<number | string | bigint> =
      | UUID
      | number
      | undefined
      | string
      | bigint,
    TContext extends Yup.AnyObject = Yup.AnyObject,
    TOut extends TType = TType,
  > extends Yup.StringSchema<TType, TContext, TOut> {
    otp(): StringSchema<TType, TContext>;

    password(): StringSchema<TType, TContext>;

    emailOrPhone(): StringSchema<TType, TContext>;

    username(): StringSchema<TType, TContext>;

    fullName(): StringSchema<TType, TContext>;

    phone(): StringSchema<TType, TContext>;

    email(): StringSchema<TType, TContext>;

    notEmpty(): StringSchema<TType, TContext>;

    date(formatDate: string): StringSchema<TType, TContext>;

    uuid(): StringSchema<UUID, TContext>;
  }
}

export default Yup;
