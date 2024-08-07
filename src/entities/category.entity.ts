import BaseUniqueNameEntity from '@entities/baseUniqueName.entity';
import { Product } from '@entities/product.entity';
import { Shop } from '@entities/shop.entity';
import { Field } from 'type-graphql';
import { Column, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

export class Category extends BaseUniqueNameEntity {
  @Field(() => Boolean)
  @Column('boolean', { name: 'is_active', default: false })
  declare isActive: boolean;

  @Field(() => Boolean)
  @Column('boolean', { name: 'is_common', default: false })
  declare isCommon: boolean;

  @Field(() => Shop)
  @ManyToOne(() => Shop, shop => shop.categories)
  @JoinColumn({ name: 'shop_id' })
  declare shop?: Shop;

  @Field(() => [Product])
  @OneToMany(() => Product, product => product.category)
  declare products?: Product[];
}
