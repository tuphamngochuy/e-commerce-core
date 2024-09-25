import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import {
  BASE_COLUMNS,
  IS_ACTIVE_COLUMN,
  IS_VERIFIED_COLUMN,
} from '../common/columns';

export class CreateUserTable1727194875045 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'user',
        columns: [
          ...BASE_COLUMNS,
          {
            name: 'username',
            isUnique: true,
            type: 'text',
          },
          {
            name: 'password',
            type: 'text',
          },
          {
            name: 'salt',
            type: 'text',
            isNullable: true,
          },
          IS_ACTIVE_COLUMN,
          IS_VERIFIED_COLUMN,
          {
            name: 'person_id',
            type: 'uuid',
            foreignKeyConstraintName: 'fk_user_person_id',
          },
        ],
        schema: 'identity',
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('identity.user', true, true, true);
  }
}
