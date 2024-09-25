import BaseEntity from '@entities/base.entity';
import { SystemRole } from '@entities/identity/systemRole.entity';
import { User } from '@entities/identity/user.entity';
import { Field, ObjectType } from 'type-graphql';
import { Entity, JoinColumn, ManyToOne } from 'typeorm';

@ObjectType()
@Entity({
  name: 'user_in_system_role',
  schema: 'identity',
})
export class UserInSystemRole extends BaseEntity {
  @Field(() => User)
  @ManyToOne(() => User, user => user.userInSystemRoles)
  @JoinColumn({
    name: 'user_id',
  })
  declare user: User;

  @Field(() => SystemRole)
  @ManyToOne(() => SystemRole, systemRole => systemRole.userInSystemRoles)
  @JoinColumn({
    name: 'system_role_id',
  })
  declare systemRole: SystemRole;
}
