import { UserQueryResolver } from 'src/graphQL/resolvers/user/query';

const UserResolver = [UserQueryResolver] as const;

export default UserResolver;
