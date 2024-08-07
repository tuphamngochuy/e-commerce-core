import { Query, Resolver } from 'type-graphql';

@Resolver()
export class UserQueryResolver {
  @Query(() => String)
  name(): string {
    return 'hell';
  }
}
