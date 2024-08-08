import { UUID } from 'crypto';
import 'reflect-metadata';
import { getCurrentContext } from 'src/graphQL/context';
import { UUIDScalar } from 'src/graphQL/scalars/uuid.scalar';
import { Field, ObjectType } from 'type-graphql';
import {
  BeforeInsert,
  BeforeRemove,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType({ isAbstract: true })
@Entity()
abstract class BaseEntity {
  @Field(() => UUIDScalar)
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  declare id: UUID;

  @Field(() => Date)
  @CreateDateColumn({ type: 'timestamp with time zone', name: 'created_at' })
  declare createdAt: Date;

  @Field(() => UUIDScalar, { nullable: true })
  @Column('uuid', { name: 'created_by', nullable: true })
  declare createdBy?: UUID;

  @Field(() => Date, { nullable: true })
  @UpdateDateColumn({ type: 'timestamp with time zone', name: 'updated_at' })
  declare updatedAt?: Date;

  @Field(() => UUIDScalar, { nullable: true })
  @Column('uuid', { name: 'updated_by', nullable: true })
  declare updatedBy?: UUID;

  @Field(() => Date, { nullable: true })
  @DeleteDateColumn({
    type: 'timestamp with time zone',
    name: 'deleted_at',
    nullable: true,
  })
  declare deletedAt: Date;

  @Field(() => UUIDScalar, { nullable: true })
  @Column('uuid', { name: 'deleted_by', nullable: true })
  declare deletedBy?: UUID;

  @BeforeInsert()
  generateInsertColumns() {
    this.createdBy = getCurrentContext().userId;
    this.updatedBy = getCurrentContext().userId;
  }

  @BeforeUpdate()
  generateUpdateColumns() {
    this.updatedBy = getCurrentContext().userId;
  }

  @BeforeRemove()
  generateDeleteColumns() {
    this.deletedBy = getCurrentContext().userId;
  }
}

export default BaseEntity;
