import { UserMutationResolver } from '@user/graphql/resolver/mutation';
import { UserQueryResolver } from '@user/graphql/resolver/query';

const UserResolver = [UserQueryResolver, UserMutationResolver] as const;

export default UserResolver;
