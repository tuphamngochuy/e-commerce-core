import BaseEntity from '@entities/base.entity';
import { Invoice } from '@entities/invoice.entity';
import { Item } from '@entities/item.entity';
import { User } from '@entities/user.entity';
import { CartStatus } from '@enums/status';
import { Field } from 'type-graphql';
import { Column, JoinColumn, ManyToOne, OneToMany, OneToOne } from 'typeorm';

export class Cart extends BaseEntity {
  @Field(() => CartStatus)
  @Column('enum', {
    name: 'status',
    enum: CartStatus,
    default: CartStatus.CREATED,
  })
  declare status: CartStatus;

  @Field(() => User)
  @ManyToOne(() => User, user => user.carts)
  @JoinColumn({ name: 'user_id' })
  declare user?: User;

  @Field(() => [Item])
  @OneToMany(() => Item, item => item.cart)
  declare items?: Item[];

  @Field(() => Invoice)
  @OneToOne(() => Invoice, invoice => invoice.cart)
  declare invoice?: Invoice;
}
