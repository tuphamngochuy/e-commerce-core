import BaseEntity from '@entities/base.entity';
import { Person } from '@entities/identity/person.entity';
import { UserAlias } from '@entities/identity/userAlias.entity';
import { UserInSystemRole } from '@entities/identity/userInSystemRole.entity';
import { UserInWorkgroup } from '@entities/organization/userInWorkgroup.entity';
import { Cart } from '@entities/purchase/cart.entity';
import { Field, ObjectType } from 'type-graphql';
import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';

export type TUserOutput = Pick<User, keyof User>;
export type TUserInput = Omit<User, 'createdAt' | 'updatedAt'>;

@ObjectType()
@Entity({
  name: 'user',
  schema: 'identity',
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
