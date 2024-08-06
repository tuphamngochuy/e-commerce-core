import { SignUpInput } from '@inputs/signUpInput';
import { userService } from '@services/user';
import { Context } from 'src/graphQL/context/type';
import SignUpOutput from 'src/graphQL/outputs/signUpOutput';
import { Arg, Ctx, Mutation, Resolver } from 'type-graphql';

@Resolver()
export class UserMutationResolver {
  @Mutation(() => SignUpOutput)
  async signUp(
    @Arg('payload', (type) => SignUpInput)
    payload: SignUpInput,
    @Ctx() context: Context
  ): Promise<SignUpOutput> {
    return userService.signUp({ input: payload, context });
  }
}
