import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateOrganizationSchema1727194160482
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createSchema('organization', true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropSchema('organization', true);
  }
}
