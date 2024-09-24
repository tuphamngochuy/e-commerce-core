import { User } from '@entities/actualEntities/user.entity';
import BaseEntity from '@entities/base.entity';
import { BiologicalSex } from '@enums/person';
import { Field, ObjectType } from 'type-graphql';
import { Column, Entity, OneToOne } from 'typeorm';

export type TPersonOutput = Pick<Person, keyof Person>;
export type TPersonInput = Omit<Person, 'createdAt' | 'updatedAt'>;

@ObjectType()
@Entity({
  name: 'person',
})
export class Person extends BaseEntity {
  @Field(() => String)
  @Column('text', { name: 'full_name' })
  declare fullName: string;

  @Field(() => String)
  @Column('text', { nullable: true, name: 'email' })
  declare email?: string;

  @Field(() => String)
  @Column('text', { nullable: true, name: 'phone_number' })
  declare phoneNumber?: string;

  @Field(() => BiologicalSex)
  @Column('enum', { nullable: true, name: 'gender', enum: BiologicalSex })
  declare gender?: BiologicalSex;

  @Field(() => Date)
  @Column('date', {
    nullable: true,
    name: 'date_of_birth',
  })
  declare dateOfBirth?: Date;

  @Field(() => String)
  @Column('text', { nullable: true, name: 'place_of_births' })
  declare placeOfBirth?: string;

  @Field(() => String)
  @Column('text', { nullable: true, name: 'address' })
  declare address?: string;

  @Field(() => User)
  @OneToOne(() => User, user => user.person)
  declare user?: User;
}
