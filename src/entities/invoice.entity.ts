import BaseEntity from '@entities/base.entity';
import { Cart } from '@entities/cart.entity';
import { PaymentMethod } from '@enums/common';
import { InvoiceStatus } from '@enums/status';
import { Field, ObjectType } from 'type-graphql';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';

@ObjectType()
@Entity({
  name: 'invoice',
})
export class Invoice extends BaseEntity {
  @Field(() => InvoiceStatus)
  @Column('enum', {
    name: 'status',
    enum: InvoiceStatus,
    default: InvoiceStatus.CREATED,
  })
  declare status: InvoiceStatus;

  @Field(() => Number)
  @Column('float', {
    name: 'amount',
    default: 0,
  })
  declare amount: number;

  @Field(() => PaymentMethod)
  @Column('enum', {
    name: 'payment_method',
    enum: PaymentMethod,
    nullable: true,
  })
  declare paymentMethod: InvoiceStatus;

  @Field(() => String)
  @Column('text', {
    name: 'invoice_number',
    nullable: true,
  })
  declare invoiceNumber: string;

  @Field(() => String)
  @Column('text', {
    name: 'invoice_note',
    nullable: true,
  })
  declare invoiceNote: string;

  @Field(() => Cart)
  @OneToOne(() => Cart, cart => cart.invoice)
  @JoinColumn({ name: 'cart_id' })
  declare cart?: Cart;
}
