import BaseUniqueNameEntity from '@entities/baseUniqueName.entity';
import { Role } from '@entities/organization/role.entity';
import { UserInWorkgroup } from '@entities/organization/userInWorkgroup.entity';
import { Shop } from '@entities/product/shop.entity';
import { Field, ObjectType } from 'type-graphql';
import { Column, Entity, ManyToOne, OneToMany, OneToOne } from 'typeorm';

@ObjectType()
@Entity({
  name: 'workgroup',
  schema: 'organization',
})
export class Workgroup extends BaseUniqueNameEntity {
  @Field(() => Boolean)
  @Column('boolean', { name: 'is_active', default: false })
  declare isActive: boolean;

  @Field(() => Workgroup)
  @ManyToOne(() => Workgroup, parent => parent.children)
  declare parent?: Workgroup;

  @Field(() => [Workgroup])
  @OneToMany(() => Workgroup, children => children.parent)
  declare children?: Workgroup[];

  @Field(() => [Role])
  @OneToMany(() => Role, role => role.workgroup)
  declare roles?: Role[];

  @Field(() => [UserInWorkgroup])
  @OneToMany(
    () => UserInWorkgroup,
    userInWorkgroup => userInWorkgroup.workgroup,
  )
  declare userInWorkgroups: UserInWorkgroup[];

  @Field(() => Shop)
  @OneToOne(() => Shop, shop => shop.workgroup)
  declare shop?: Shop;
}
