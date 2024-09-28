import { ListInput } from '@services/common/input/listInput';
import { UserOutput } from '@services/user/graphql/outputs/usersOutput';
import { userService } from '@services/user/service';
import { Context } from 'src/graphQL/context/type';
import { Arg, Ctx, Query, Resolver } from 'type-graphql';

@Resolver()
export class UserQueryResolver {
  @Query(() => String)
  name(): string {
    return 'hell';
  }

  @Query(() => UserOutput)
  async users(
    @Arg('payload', () => ListInput, { nullable: true })
    payload: ListInput,
    @Ctx() context: Context,
  ): Promise<UserOutput> {
    context.logger;
    return userService.getUsers({ payload, context });
  }
}
