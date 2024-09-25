import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateIdentitySchema1727194152586 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createSchema('identity', true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropSchema('identity', true);
  }
}
