import { SignUpInput } from '@inputs/signUpInput';
import { Arg, Mutation, Resolver } from 'type-graphql';

@Resolver()
export class UserMutationResolver {
  @Mutation()
  async signUp(@Arg('payload') signUpInput: SignUpInput) {
    //
  }
}
