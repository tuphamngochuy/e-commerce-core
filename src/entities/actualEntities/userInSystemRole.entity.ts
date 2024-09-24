import { SystemRole } from '@entities/actualEntities/systemRole.entity';
import { User } from '@entities/actualEntities/user.entity';
import BaseEntity from '@entities/base.entity';
import { Field, ObjectType } from 'type-graphql';
import { Entity, JoinColumn, ManyToOne } from 'typeorm';

@ObjectType()
@Entity({
  name: 'user_in_system_role',
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
