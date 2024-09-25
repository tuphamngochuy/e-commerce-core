import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateProductSchema1727194181451 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createSchema('product', true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropSchema('product', true);
  }
}
