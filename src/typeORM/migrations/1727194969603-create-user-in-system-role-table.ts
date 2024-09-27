import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUserInSystemRoleTable1727194969603
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'user_in_system_role',
        schema: 'identity',
        columns: [
          {
            name: 'user_id',
            type: 'uuid',
            foreignKeyConstraintName: 'fk_user_in_system_role_user_id',
          },
          {
            name: 'system_role_id',
            type: 'uuid',
            foreignKeyConstraintName: 'fk_user_in_system_role_system_role_id',
          },
        ],
        foreignKeys: [
          {
            columnNames: ['user_id'],
            referencedTableName: 'identity.user',
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
            name: 'fk_user_in_system_role_user_id',
          },
          {
            columnNames: ['system_role_id'],
            referencedTableName: 'identity.system_role',
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
            name: 'fk_user_in_system_role_system_role_id',
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(
      'identity.user_in_system_role',
      true,
      true,
      true,
    );
    await queryRunner.dropForeignKey(
      'identity.user_in_system_role',
      'fk_user_in_system_role_user_id',
    );
  }
}
