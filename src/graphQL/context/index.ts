import { ExpressContext } from 'apollo-server-express';
import { randomUUID } from 'crypto';
import { Context } from 'src/graphQL/context/type';

const createContext = ({ req }: ExpressContext): Context => {
  return {
    requestId: randomUUID(),
  };
};

export default createContext;
