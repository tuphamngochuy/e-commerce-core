import { SignUpInput } from '@user/graphql/inputs/signUpInput';
import SignUpOutput from '@user/graphql/outputs/signUpOutput';
import { userService } from '@user/service';
import { Context } from 'src/graphQL/context/type';
import { Arg, Ctx, Mutation, Resolver } from 'type-graphql';

@Resolver()
export class UserMutationResolver {
  @Mutation(() => SignUpOutput)
  async signUp(
    @Arg('payload', () => SignUpInput)
    payload: SignUpInput,
    @Ctx() context: Context,
  ): Promise<SignUpOutput> {
    return userService.signUp({ input: payload, context });
  }
}
