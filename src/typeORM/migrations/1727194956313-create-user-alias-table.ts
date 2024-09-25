import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import {
  BASE_COLUMNS,
  IS_ACTIVE_COLUMN,
  IS_VERIFIED_COLUMN,
} from '../common/columns';

export class CreateUserAliasTable1727194956313 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'user_alias',
        schema: 'identity',
        columns: [
          ...BASE_COLUMNS,
          {
            name: 'value',
            isUnique: true,
            type: 'text',
          },
          IS_ACTIVE_COLUMN,
          IS_VERIFIED_COLUMN,
          {
            name: 'user_id',
            type: 'uuid',
            foreignKeyConstraintName: 'fk_user_alias_user_id',
          },
        ],
        foreignKeys: [
          {
            name: 'fk_user_alias_user_id',
            columnNames: ['user_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'identity.user',
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('identity.user_alias', true, true, true);
    await queryRunner.dropForeignKey(
      'identity.user_alias',
      'fk_user_alias_user_id',
    );
  }
}
