import BaseEntity from '@entities/base.entity';
import { User } from '@entities/identity/user.entity';
import { Invoice } from '@entities/purchase/invoice.entity';
import { Item } from '@entities/purchase/item.entity';
import { CartStatus } from '@enums/status';
import { Field, ObjectType } from 'type-graphql';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';

@ObjectType()
@Entity({
  name: 'cart',
  schema: 'purchase',
})
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
