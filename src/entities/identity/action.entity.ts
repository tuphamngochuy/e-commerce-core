import BaseUniqueNameEntity from '@entities/baseUniqueName.entity';
import { Permission } from '@entities/identity/permission.entity';
import { Field, ObjectType } from 'type-graphql';
import { Column, Entity, OneToMany } from 'typeorm';

@ObjectType()
@Entity({
  name: 'action',
  schema: 'identity',
})
export class Action extends BaseUniqueNameEntity {
  @Field(() => Boolean)
  @Column('boolean', { name: 'is_active', default: false })
  declare isActive: boolean;

  @Field(() => [Permission])
  @OneToMany(() => Permission, permission => permission.action)
  declare permissions: Permission[];
}
