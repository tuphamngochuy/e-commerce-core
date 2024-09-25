import { MigrationInterface, QueryRunner, Table, TableIndex } from 'typeorm';
import { BASE_COLUMNS, IS_ACTIVE_COLUMN, NAME_COLUMN } from '../common/columns';

export class CreateRoleTable1727202427801 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'role',
        schema: 'organization',
        columns: [
          ...BASE_COLUMNS,
          NAME_COLUMN,
          IS_ACTIVE_COLUMN,
          {
            name: 'workgroup_id',
            type: 'uuid',
            foreignKeyConstraintName: 'fk_role_workgroup_id',
          },
        ],
        foreignKeys: [
          {
            name: 'fk_role_workgroup_id',
            columnNames: ['workgroup_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'organization.workgroup',
            onDelete: 'CASCADE',
          },
        ],
      }),
      true,
    );
    await queryRunner.createIndex(
      'organization.role',
      new TableIndex({
        name: 'idx_organization_role_name',
        columnNames: ['name'],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('organization.role', true, true, true);
    await queryRunner.dropForeignKey(
      'organization.role',
      'fk_role_workgroup_id',
    );
  }
}
