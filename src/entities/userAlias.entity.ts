import BaseEntity from '@entities/base.entity';
import { User } from '@entities/user.entity';
import { Field, ObjectType } from 'type-graphql';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@ObjectType()
@Entity({
  name: 'user_alias',
})
export class UserAlias extends BaseEntity {
  @Field(() => String)
  @Column('text', { name: 'value' })
  declare value: string;

  @Field(() => Boolean)
  @Column('boolean', { default: false, name: 'is_active' })
  declare isActive: boolean;

  @Field(() => Boolean)
  @Column('boolean', { default: false, name: 'is_verified' })
  declare isVerified: boolean;

  @Field(() => User)
  @ManyToOne(() => User, user => user.userAliases)
  @JoinColumn({ name: 'user_id' })
  declare user: User;
}
