import { registerEnumType } from 'type-graphql';

export enum SystemRoleType {
  ADMIN = 'ADMIN',
  BUYER = 'BUYER',
  SELLER = 'SELLER',
}

registerEnumType(SystemRoleType, { name: 'SystemRoleType' });

export enum WorkgroupType {
  SELLER = 'SELLER',
  ADMIN = 'ADMIN',
}

registerEnumType(WorkgroupType, { name: 'WorkgroupType' });
