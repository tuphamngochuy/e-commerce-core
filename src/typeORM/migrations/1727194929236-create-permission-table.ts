import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { BASE_COLUMNS } from '../common/columns';

export class CreatePermissionTable1727194929236 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'permission',
        schema: 'identity',
        columns: [
          ...BASE_COLUMNS,
          {
            name: 'role_id',
            type: 'uuid',
            foreignKeyConstraintName: 'fk_permission_role_id',
          },
          {
            name: 'action_id',
            type: 'uuid',
            foreignKeyConstraintName: 'fk_permission_action_id',
          },
        ],
        foreignKeys: [
          {
            name: 'fk_permission_action_id',
            columnNames: ['action_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'identity.action',
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('identity.permission', true, true, true);
    await queryRunner.dropForeignKey(
      'identity.permission',
      'fk_permission_action_id',
    );
  }
}
