import BaseEntity from '@entities/base.entity';
import { Cart } from '@entities/cart.entity';
import { Person } from '@entities/person.entity';
import { UserAlias } from '@entities/userAlias.entity';
import { UserInSystemRole } from '@entities/userInSystemRole.entity';
import { UserInWorkgroup } from '@entities/userInWorkgroup.entity';
import { Field, ObjectType } from 'type-graphql';
import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';

@ObjectType()
@Entity({
  name: 'user',
})
export class User extends BaseEntity {
  @Field(() => String)
  @Column('text', { unique: true, name: 'username' })
  declare username: string;

  @Field(() => String)
  @Column('text', { name: 'password', nullable: true })
  declare password?: string;

  @Field(() => String)
  @Column('text', { name: 'salt', nullable: true })
  declare salt?: string;

  @Field(() => Boolean)
  @Column('boolean', { name: 'is_active' })
  declare isActive: boolean;

  @Field(() => Person)
  @OneToOne(() => Person, person => person.user)
  @JoinColumn({ name: 'person_id' })
  declare person?: Person;

  @Field(() => [UserAlias])
  @OneToMany(() => UserAlias, userAlias => userAlias.user)
  declare userAliases?: UserAlias[];

  @Field(() => [UserInWorkgroup])
  @OneToMany(() => UserInWorkgroup, userInWorkgroup => userInWorkgroup.user)
  declare userInWorkgroups?: UserInWorkgroup[];

  @Field(() => [UserInSystemRole])
  @OneToMany(() => UserInSystemRole, userInSystemRole => userInSystemRole.user)
  declare userInSystemRoles?: UserInSystemRole[];

  @Field(() => [Cart])
  @OneToMany(() => Cart, cart => cart.user)
  declare carts?: Cart[];
}
