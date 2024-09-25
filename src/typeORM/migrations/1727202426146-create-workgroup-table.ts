import { MigrationInterface, QueryRunner, Table, TableIndex } from 'typeorm';
import {
  BASE_COLUMNS,
  IS_ACTIVE_COLUMN,
  NAME_COLUMN,
  SLUG_COLUMN,
} from '../common/columns';

export class CreateWorkgroupTable1727202426146 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'workgroup',
        schema: 'organization',
        columns: [
          ...BASE_COLUMNS,
          IS_ACTIVE_COLUMN,
          {
            name: 'parent_id',
            type: 'uuid',
            isNullable: true,
            foreignKeyConstraintName: 'fk_workgroup_parent_id',
          },
          SLUG_COLUMN,
          NAME_COLUMN,
        ],
        foreignKeys: [
          {
            name: 'fk_workgroup_parent_id',
            columnNames: ['parent_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'workgroup',
            onDelete: 'NO ACTION',
          },
        ],
      }),
      true,
    );

    await queryRunner.createIndex(
      'organization.workgroup',
      new TableIndex({
        name: 'idx_organization_workgroup_name',
        columnNames: ['name'],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('organization.workgroup', true, true, true);
    await queryRunner.dropForeignKey(
      'organization.workgroup',
      'fk_workgroup_parent_id',
    );
  }
}
