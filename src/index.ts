import 'reflect-metadata';

import dataSource from '@typeORM/dataSource';
import { ApolloServer } from 'apollo-server';
import createContext from 'src/graphQL/context';
import resolvers from 'src/graphQL/resolvers/index';
import { buildSchema } from 'type-graphql';

const main = async () => {
  try {
    await dataSource.initialize();

    console.log(`Database connected`);

    const schema = await buildSchema({
      resolvers,
    });

    console.log('Schema has been built');

    const server = new ApolloServer({
      schema,
      context: createContext,
    });

    await server.listen(4000);

    console.log(`Server started at port ${4000}`);
  } catch (error) {
    console.log(`Error happened ${error}`);
  }
};

main();
