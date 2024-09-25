import BaseEntity from '@entities/base.entity';
import { User } from '@entities/identity/user.entity';
import { Role } from '@entities/organization/role.entity';
import { Workgroup } from '@entities/organization/workgroup.entity';
import { Field, ObjectType } from 'type-graphql';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@ObjectType()
@Entity({
  name: 'user_in_workgroup',
  schema: 'organization',
})
export class UserInWorkgroup extends BaseEntity {
  @Field(() => Boolean)
  @Column('boolean', { name: 'is_owner', default: false })
  declare isOwner: boolean;

  @Field(() => Boolean)
  @Column('boolean', { name: 'is_verified', default: false })
  declare isVerified: boolean;

  @Field(() => Boolean)
  @Column('boolean', { name: 'is_active', default: false })
  declare isActive: boolean;

  @Field(() => User)
  @ManyToOne(() => User, user => user.userInWorkgroups)
  @JoinColumn({
    name: 'user_id',
  })
  declare user: User;

  @Field(() => Workgroup)
  @ManyToOne(() => Workgroup, workgroup => workgroup.userInWorkgroups)
  @JoinColumn({
    name: 'workgroup_id',
  })
  declare workgroup: Workgroup;

  @Field(() => Role)
  @ManyToOne(() => Role, role => role.userInWorkgroups)
  @JoinColumn({
    name: 'role_id',
  })
  declare role?: Role;
}
