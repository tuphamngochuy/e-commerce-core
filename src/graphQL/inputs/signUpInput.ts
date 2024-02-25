import { Field, InputType } from 'type-graphql';

@InputType({ description: 'Sign up input' })
export class SignUpInput {
  @Field(() => String)
  declare username: string;

  @Field(() => String)
  declare password: string;

  @Field(() => String)
  declare fullName: string;

  @Field(() => Boolean, { nullable: true, defaultValue: false })
  declare needVerification: boolean;
}
