import { User } from '@entities/user.entity';
import ListOutput from '@services/common/output/listOutput';
import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class UserOutput extends ListOutput {
  @Field(() => [User])
  declare rows: User[];
}
