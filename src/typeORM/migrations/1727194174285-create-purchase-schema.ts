import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreatePurchaseSchema1727194174285 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createSchema('purchase', true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropSchema('purchase', true);
  }
}
