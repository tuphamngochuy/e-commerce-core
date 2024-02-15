import dataSource from "@typeORM/dataSource";
import { ApolloServer } from "apollo-server";
import "reflect-metadata";
import { UserResolver } from "src/resolvers/user";
import { buildSchema } from "type-graphql";

const main = async () => {
  try {
    await dataSource.initialize();
    console.log(`Database connected`);
    const schema = await buildSchema({
      resolvers: [UserResolver],
    });

    console.log("Schema has been built");

    const server = new ApolloServer({
      schema,
    });

    await server.listen(4000);

    console.log(`Server started at port ${4000}`);
  } catch (error) {
    console.log(`Error happened ${error}`);
  }
};

main();
