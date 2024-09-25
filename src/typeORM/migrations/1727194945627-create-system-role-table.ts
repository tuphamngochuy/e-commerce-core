import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { SystemRoleType } from '../../graphQL/enums/role';
import { BASE_COLUMNS, SLUG_COLUMN } from '../common/columns';

export class CreateSystemRoleTable1727194945627 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'system_role',
        schema: 'identity',
        columns: [
          ...BASE_COLUMNS,
          {
            name: 'name',
            type: 'enum',
            isUnique: true,
            enum: Object.values(SystemRoleType),
            enumName: 'system_role_type',
          },
          SLUG_COLUMN,
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('identity.system_role', true, true, true);
  }
}
