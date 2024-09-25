import { TableColumn } from 'typeorm';

export const ID_COLUMN = new TableColumn({
  name: 'id',
  type: 'uuid',
  isPrimary: true,
  generationStrategy: 'uuid',
  default: 'uuid_generate_v4()',
});

export const CREATED_AT_COLUMN = new TableColumn({
  name: 'created_at',
  type: 'timestamp with time zone',
  default: 'now()',
});

export const CREATED_BY_COLUMN = new TableColumn({
  name: 'created_by',
  type: 'uuid',
  isNullable: true,
});

export const UPDATED_AT_COLUMN = new TableColumn({
  name: 'updated_at',
  type: 'timestamp with time zone',
  isNullable: true,
});

export const UPDATED_BY_COLUMN = new TableColumn({
  name: 'updated_by',
  type: 'uuid',
  isNullable: true,
});

export const DELETED_AT_COLUMN = new TableColumn({
  name: 'deleted_at',
  type: 'timestamp with time zone',
  isNullable: true,
});

export const DELETED_BY_COLUMN = new TableColumn({
  name: 'deleted_by',
  type: 'uuid',
  isNullable: true,
});

export const SLUG_COLUMN = new TableColumn({
  name: 'slug',
  type: 'varchar',
  isUnique: true,
});

export const IS_ACTIVE_COLUMN = new TableColumn({
  name: 'is_active',
  type: 'boolean',
  default: false,
});

export const IS_VERIFIED_COLUMN = new TableColumn({
  name: 'is_verified',
  type: 'boolean',
  default: false,
});

export const NAME_COLUMN = new TableColumn({
  name: 'name',
  type: 'text',
});

export const BASE_COLUMNS = [
  ID_COLUMN,
  CREATED_AT_COLUMN,
  CREATED_BY_COLUMN,
  UPDATED_AT_COLUMN,
  UPDATED_BY_COLUMN,
  DELETED_AT_COLUMN,
  DELETED_BY_COLUMN,
];
