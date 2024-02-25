import BaseEntity from '@entities/base.entity';
import { Role } from '@entities/role.entity';
import { UserInWorkgroup } from '@entities/userInWorkgroup.entity';
import { Field, ObjectType } from 'type-graphql';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

@ObjectType()
@Entity({
  name: 'workgroup',
})
export class Workgroup extends BaseEntity {
  @Field(() => String)
  @Column('text', { unique: true, name: 'name' })
  declare name: string;

  @Field(() => Boolean)
  @Column('boolean', { name: 'is_active', default: false })
  declare isActive: boolean;

  @Field(() => Workgroup)
  @ManyToOne(() => Workgroup, (parent) => parent.children)
  declare parent?: Workgroup;

  @Field(() => [Workgroup])
  @OneToMany(() => Workgroup, (children) => children.parent)
  declare children?: Workgroup[];

  @Field(() => [Role])
  @OneToMany(() => Role, (role) => role.workgroup)
  declare roles?: Role[];

  @Field(() => [UserInWorkgroup])
  @OneToMany(
    () => UserInWorkgroup,
    (userInWorkgroup) => userInWorkgroup.workgroup
  )
  declare userInWorkgroups: UserInWorkgroup[];
}
