import { Field, ObjectType } from 'type-graphql';

@ObjectType()
class SignUpOutput {
  @Field(() => String, { nullable: true })
  declare otpToken?: string;

  @Field(() => String, { nullable: true })
  declare accessToken?: string;

  @Field(() => String, { nullable: true })
  declare userAliasId?: string;

  @Field(() => String, { nullable: true })
  declare refreshToken?: string;
}

export default SignUpOutput;
