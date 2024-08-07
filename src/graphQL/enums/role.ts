import { registerEnumType } from 'type-graphql';

export enum SystemRoleType {
  ADMIN = 'ADMIN',
  BUYER = 'BUYER',
  SELLER = 'SELLER',
}

export enum WorkgroupType {
  SELLER = 'SELLER',
  ADMIN = 'ADMIN',
}

registerEnumType(SystemRoleType, { name: 'SystemRoleType' });
registerEnumType(WorkgroupType, { name: 'WorkgroupType' });
