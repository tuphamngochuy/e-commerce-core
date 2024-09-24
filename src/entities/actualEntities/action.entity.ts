import { Permission } from '@entities/actualEntities/permission.entity';
import BaseUniqueNameEntity from '@entities/baseUniqueName.entity';
import { Field, ObjectType } from 'type-graphql';
import { Column, Entity, OneToMany } from 'typeorm';

@ObjectType()
@Entity({
  name: 'action',
})
export class Action extends BaseUniqueNameEntity {
  @Field(() => Boolean)
  @Column('boolean', { name: 'is_active', default: false })
  declare isActive: boolean;

  @Field(() => [Permission])
  @OneToMany(() => Permission, permission => permission.action)
  declare permissions: Permission[];
}