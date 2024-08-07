import { registerEnumType } from 'type-graphql';

export enum Platform {
  STORE_MANAGEMENT = 'STORE_MANAGEMENT',
  CONSUMER_APP = 'CONSUMER_APP',
}

registerEnumType(Platform, {
  name: 'Platform',
});

export enum PaymentMethod {
  CASH = 'CASH',
  CARD = 'CARD',
  E_WALLET = 'E_WALLET',
}

registerEnumType(PaymentMethod, {
  name: 'PaymentMethod',
});
