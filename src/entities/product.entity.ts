import BaseEntity from '@entities/base.entity';
import { Category } from '@entities/category.entity';
import { Item } from '@entities/item.entity';
import { Shop } from '@entities/shop.entity';
import { Field } from 'type-graphql';
import { Column, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

export class Product extends BaseEntity {
  @Field(() => String)
  @Column('text', { name: 'name' })
  declare name: string;

  @Field(() => Number)
  @Column('int', { name: 'quantity', default: 0 })
  declare quantity: number;

  @Field(() => Number)
  @Column('double', { name: 'price', default: 0 })
  declare price: number;

  @Field(() => Shop)
  @ManyToOne(() => Shop, shop => shop.products)
  @JoinColumn({ name: 'shop_id' })
  declare shop?: Shop;

  @Field(() => Category)
  @ManyToOne(() => Category, category => category.products)
  @JoinColumn({ name: 'category_id' })
  declare category?: Category;

  @Field(() => [Item])
  @OneToMany(() => Item, item => item.product)
  declare items?: Item[];
}
