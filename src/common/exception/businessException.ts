import { IError } from '@common/exception/error';
import { isNil } from 'lodash';

class BusinessException extends Error {
  readonly code: string;

  readonly name: string;

  readonly payload?: object;

  constructor(error: IError, payload?: object) {
    const messageKey = `ERROR:${error.name}`;
    super(messageKey);
    this.name = error.name;
    this.code = error.code;
    if (!isNil(payload)) {
      this.payload = payload;
    }
  }
}

export default BusinessException;
