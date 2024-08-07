import { registerEnumType } from 'type-graphql';

export enum InvoiceStatus {
  CREATED = 'CREATED',
  PENDING = 'PENDING',
  CHARGED = 'CHARGED',
}

registerEnumType(InvoiceStatus, {
  name: 'InvoiceStatus',
});

export enum CartStatus {
  CREATED = 'CREATED',
  SUBMITTED = 'SUBMITTED',
}

registerEnumType(CartStatus, {
  name: 'CartStatus',
});
