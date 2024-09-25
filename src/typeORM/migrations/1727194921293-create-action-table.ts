import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import {
  BASE_COLUMNS,
  IS_ACTIVE_COLUMN,
  NAME_COLUMN,
  SLUG_COLUMN,
} from '../common/columns';

export class CreateActionTable1727194921293 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'action',
        schema: 'identity',
        columns: [...BASE_COLUMNS, IS_ACTIVE_COLUMN, SLUG_COLUMN, NAME_COLUMN],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('identity.action', true, true, true);
  }
}
