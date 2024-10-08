import BaseEntity from '@entities/base.entity';
import { Product } from '@entities/product/product.entity';
import { Cart } from '@entities/purchase/cart.entity';
import { Field, ObjectType } from 'type-graphql';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@ObjectType()
@Entity({
  name: 'item',
  schema: 'purchase',
})
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
