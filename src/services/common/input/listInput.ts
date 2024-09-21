import { Field, InputType } from 'type-graphql';

@InputType()
export class ListInput {
  @Field(() => Number)
  declare page: number;

  @Field(() => Number)
  declare size: number;
}
