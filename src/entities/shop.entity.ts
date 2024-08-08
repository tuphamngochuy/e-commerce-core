import BaseEntity from '@entities/base.entity';
import { Category } from '@entities/category.entity';
import { Product } from '@entities/product.entity';
import { Workgroup } from '@entities/workgroup.entity';
import { Field, ObjectType } from 'type-graphql';
import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';

@ObjectType()
@Entity({
  name: 'shop',
})
export class Shop extends BaseEntity {
  @Field(() => String)
  @Column('text', { name: 'name' })
  declare name: string;

  @Field(() => Workgroup)
  @OneToOne(() => Workgroup, workgroup => workgroup.shop)
  @JoinColumn({ name: 'workgroup_id' })
  declare workgroup: Workgroup;

  @Field(() => Boolean)
  @Column('boolean', { name: 'is_active' })
  declare isActive: boolean;

  @Field(() => [Category])
  @OneToMany(() => Category, category => category.shop)
  declare categories?: Category[];

  @Field(() => [Product])
  @OneToMany(() => Product, product => product.shop)
  declare products?: Product[];
}
