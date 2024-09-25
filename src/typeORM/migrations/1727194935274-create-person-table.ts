import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
  TableIndex,
} from 'typeorm';
import { BiologicalSex } from '../../graphQL/enums/person';
import { BASE_COLUMNS } from '../common/columns';

export class CreatePersonTable1727194935274 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'person',
        schema: 'identity',
        columns: [
          ...BASE_COLUMNS,
          {
            name: 'full_name',
            type: 'text',
            isNullable: false,
          },
          {
            name: 'email',
            type: 'text',
          },
          {
            name: 'phone_number',
            type: 'text',
          },
          {
            name: 'gender',
            type: 'enum',
            enum: Object.values(BiologicalSex),
            enumName: 'biological_sex',
          },
          {
            name: 'date_of_birth',
            type: 'date',
          },
          {
            name: 'place_of_birth',
            type: 'text',
          },
          {
            name: 'address',
            type: 'text',
          },
        ],
      }),
      true,
    );

    await queryRunner.createForeignKey(
      'identity.user',
      new TableForeignKey({
        name: 'fk_user_person_id',
        columnNames: ['person_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'identity.person',
        onDelete: 'CASCADE',
      }),
    );

    await queryRunner.createIndex(
      'identity.person',
      new TableIndex({
        name: 'idx_identity_person_full_name',
        columnNames: ['full_name'],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('identity.person', true, true, true);
    await queryRunner.dropForeignKey('identity.user', 'fk_user_person_id');
    await queryRunner.dropIndex(
      'identity.person',
      'idx_identity_person_full_name',
    );
  }
}
