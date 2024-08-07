import UserResolver from '@user/graphql/resolver';

const resolvers = [...UserResolver] as const;

export default resolvers;
