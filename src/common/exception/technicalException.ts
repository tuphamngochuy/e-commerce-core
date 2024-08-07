import { IError } from '@common/exception/error';
import { isNil } from 'lodash';
import { getCurrentContext } from 'src/graphQL/context';

export class TechnicalException extends Error {
  readonly code: string;

  readonly name: string;

  readonly payload?: object;

  constructor(error: IError, payload?: object) {
    const context = getCurrentContext();
    const messageKey = `ERROR:${error.name}`;
    super(messageKey);
    this.name = error.name;
    this.code = error.code;
    // Log and swallow detail of technical errors
    if (isNil(context)) {
      // error occurs while generate context
      console.error(`${error.name}: ${JSON.stringify(payload)}`);
    } else {
      context?.logger?.error(`${error.name}: ${JSON.stringify(payload)}`);
    }
  }
}
