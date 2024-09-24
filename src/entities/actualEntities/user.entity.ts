import { Cart } from '@entities/actualEntities/cart.entity';
import { Person } from '@entities/actualEntities/person.entity';
import { UserAlias } from '@entities/actualEntities/userAlias.entity';
import { UserInSystemRole } from '@entities/actualEntities/userInSystemRole.entity';
import { UserInWorkgroup } from '@entities/actualEntities/userInWorkgroup.entity';
import BaseEntity from '@entities/base.entity';
import { Field, ObjectType } from 'type-graphql';
import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';

export type TUserOutput = Pick<User, keyof User>;
export type TUserInput = Omit<User, 'createdAt' | 'updatedAt'>;

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
