import BaseEntity from '@entities/base.entity';
import 'reflect-metadata';
import slugify from 'slugify';
import { Field, ObjectType } from 'type-graphql';
import { BeforeInsert, BeforeUpdate, Column, Entity } from 'typeorm';

@ObjectType({ isAbstract: true })
@Entity()
abstract class BaseUniqueNameEntity extends BaseEntity {
  @Field(() => String)
  @Column('text', { name: 'name' })
  declare name: string;

  @Field(() => String)
  @Column('text', { name: 'slug', unique: true })
  declare slug: string;

  @BeforeInsert()
  @BeforeUpdate()
  generateSlug() {
    this.slug = slugify(this.name, {
      lower: false,
      replacement: '_',
      trim: true,
    });
  }
}

export default BaseUniqueNameEntity;
