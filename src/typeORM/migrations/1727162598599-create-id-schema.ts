import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateIdSchema1727162598599 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createSchema('id');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropSchema('id');
  }
}
