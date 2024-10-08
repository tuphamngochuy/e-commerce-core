import BaseEntity from '@entities/base.entity';
import { Permission } from '@entities/identity/permission.entity';
import { UserInWorkgroup } from '@entities/organization/userInWorkgroup.entity';
import { Workgroup } from '@entities/organization/workgroup.entity';
import { Field, ObjectType } from 'type-graphql';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

@ObjectType()
@Entity({
  name: 'role',
  schema: 'organization',
})
export class Role extends BaseEntity {
  @Field(() => Boolean)
  @Column('boolean', { name: 'is_active', default: false })
  declare isActive: boolean;

  @Field(() => String)
  @Column('text', { name: 'name' })
  declare name: string;

  @Field(() => Workgroup)
  @ManyToOne(() => Workgroup, workgroup => workgroup.roles)
  @JoinColumn({
    name: 'workgroup_id',
  })
  declare workgroup: Workgroup;

  @Field(() => [UserInWorkgroup])
  @OneToMany(() => UserInWorkgroup, userInWorkgroup => userInWorkgroup.role)
  declare userInWorkgroups: UserInWorkgroup[];

  @Field(() => [Permission])
  @OneToMany(() => Permission, permission => permission.action)
  declare permissions: Permission[];
}
