import { UserMutationResolver } from '@resolvers/user/mutation';
import { UserQueryResolver } from 'src/graphQL/resolvers/user/query';

const UserResolver = [UserQueryResolver, UserMutationResolver] as const;

export default UserResolver;
