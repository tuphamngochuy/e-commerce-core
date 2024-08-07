import { Logger } from '@common/logger/logger';
import { Platform } from '@enums/common';
import { ExpressContext } from 'apollo-server-express';
import { randomUUID } from 'crypto';
import { get } from 'lodash';
import { setCurrentContext } from 'src/graphQL/context';
import { Context } from 'src/graphQL/context/type';

const createContext = ({ req }: ExpressContext): Context => {
  const requestHeaders = req.headers;

  const context = {
    requestId: randomUUID(),
    logger: Logger,
    platform: get(
      requestHeaders,
      'x-platform',
      Platform.CONSUMER_APP,
    ) as Platform,
  };

  setCurrentContext(context);
  return context;
};

export default createContext;
