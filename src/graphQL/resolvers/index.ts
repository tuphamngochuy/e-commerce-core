import UserResolver from 'src/graphQL/resolvers/user';

const resolvers = [...UserResolver] as const;

export default resolvers;
