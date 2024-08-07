import BaseEntity from '@entities/base.entity';
import { Cart } from '@entities/cart.entity';
import { Product } from '@entities/product.entity';
import { Field } from 'type-graphql';
import { Column, JoinColumn, ManyToOne } from 'typeorm';

export class Item extends BaseEntity {
  @Field(() => Number)
  @Column('int', {
    name: 'quantity',
    default: 0,
  })
  declare quantity: number;

  @Field(() => Product)
  @ManyToOne(() => Product, product => product.items)
  @JoinColumn({ name: 'product_id' })
  declare product?: Product;

  @Field(() => Cart)
  @ManyToOne(() => Cart, cart => cart.items)
  @JoinColumn({ name: 'cart_id' })
  declare cart?: Cart;
}
