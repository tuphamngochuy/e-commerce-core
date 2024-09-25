import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import {
  BASE_COLUMNS,
  IS_ACTIVE_COLUMN,
  IS_VERIFIED_COLUMN,
} from '../common/columns';

export class CreateUserInWorkgroupTable1727202442806
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'user_in_workgroup',
        schema: 'organization',
        columns: [
          ...BASE_COLUMNS,
          {
            name: 'is_owner',
            type: 'boolean',
            default: false,
          },
          IS_ACTIVE_COLUMN,
          IS_VERIFIED_COLUMN,
          {
            name: 'user_id',
            type: 'uuid',
            foreignKeyConstraintName: 'fk_user_in_workgroup_user_id',
          },
          {
            name: 'workgroup_id',
            type: 'uuid',
            foreignKeyConstraintName: 'fk_user_in_workgroup_workgroup_id',
          },
          {
            name: 'role_id',
            type: 'uuid',
            foreignKeyConstraintName: 'fk_user_in_workgroup_role_id',
            isNullable: true,
          },
        ],
        foreignKeys: [
          {
            name: 'fk_user_in_workgroup_user_id',
            columnNames: ['user_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'user',
            referencedSchema: 'identity',
          },
          {
            name: 'fk_user_in_workgroup_workgroup_id',
            columnNames: ['workgroup_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'organization.workgroup',
          },
          {
            name: 'fk_user_in_workgroup_role_id',
            columnNames: ['role_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'organization.role',
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(
      'organization.user_in_workgroup',
      true,
      true,
      true,
    );
    await queryRunner.dropForeignKey(
      'organization.user_in_workgroup',
      'fk_user_in_workgroup_user_id',
    );
    await queryRunner.dropForeignKey(
      'organization.user_in_workgroup',
      'fk_user_in_workgroup_workgroup_id',
    );
    await queryRunner.dropForeignKey(
      'organization.user_in_workgroup',
      'fk_user_in_workgroup_role_id',
    );
  }
}
