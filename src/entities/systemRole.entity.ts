import BaseUniqueNameEntity from '@entities/baseUniqueName.entity';
import { UserInSystemRole } from '@entities/userInSystemRole.entity';
import { SystemRoleType } from '@enums/role';
import { Field, ObjectType } from 'type-graphql';
import { Column, Entity, OneToMany } from 'typeorm';

@ObjectType()
@Entity({
  name: 'system_role',
})
export class SystemRole extends BaseUniqueNameEntity {
  @Field(() => SystemRoleType)
  @Column('enum', { nullable: false, unique: true, enum: SystemRoleType })
  declare name: SystemRoleType;

  @Field(() => [UserInSystemRole])
  @OneToMany(() => UserInSystemRole, userInSystemRole => userInSystemRole.user)
  declare userInSystemRoles?: UserInSystemRole[];
}
