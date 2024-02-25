import { UUID } from 'crypto';
import 'reflect-metadata';
import { UUIDScalar } from 'src/graphQL/scalars/uuid.scalar';
import { Field, ObjectType } from 'type-graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType()
@Entity()
abstract class BaseEntity {
  @Field(() => UUIDScalar)
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  declare id: UUID;

  @Field(() => Date)
  @CreateDateColumn({ type: 'timestamp with time zone', name: 'created_at' })
  declare createdAt: Date;

  @Field(() => Date, { nullable: true })
  @UpdateDateColumn({ type: 'timestamp with time zone', name: 'updated_at' })
  declare updatedAt?: Date;

  @Field(() => String)
  @Column('text', { name: 'slug', unique: true })
  declare slug: string;
}

export default BaseEntity;
