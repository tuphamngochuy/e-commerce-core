import 'reflect-metadata';

import { Logger } from '@common/logger/logger';
import dataSource from '@typeORM/dataSource';
import { ApolloServer } from 'apollo-server';
import createContext from 'src/graphQL/context/contextGenerator';
import resolvers from 'src/graphQL/resolvers/index';
import { buildSchema } from 'type-graphql';

const main = async () => {
  try {
    await dataSource.initialize();

    Logger.info(`Database connected`);

    const schema = await buildSchema({
      resolvers,
      validate: { forbidUnknownValues: false },
    });

    Logger.info('Schema has been built');

    const server = new ApolloServer({
      schema,
      context: createContext,
    });

    await server.listen(4000);

    Logger.info(`Server started at port ${4000}`);
  } catch (error) {
    Logger.error(`Error happened ${error}`);
  }
};

main();
