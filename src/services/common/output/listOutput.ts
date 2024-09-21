import { Field, ObjectType } from 'type-graphql';

@ObjectType({ isAbstract: true })
class ListOutput {
  @Field(() => Number)
  declare count: number;

  declare rows: Object[];
}

export default ListOutput;
