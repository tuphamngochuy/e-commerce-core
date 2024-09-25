import { MigrationInterface, QueryRunner, Table, TableIndex } from 'typeorm';
import { BASE_COLUMNS, IS_ACTIVE_COLUMN, NAME_COLUMN } from '../common/columns';

export class CreateShopTable1727229435610 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'shop',
        schema: 'product',
        columns: [
          ...BASE_COLUMNS,
          IS_ACTIVE_COLUMN,
          NAME_COLUMN,
          {
            name: 'workgroup_id',
            type: 'uuid',
            foreignKeyConstraintName: 'fk_shop_workgroup_id',
          },
        ],
        foreignKeys: [
          {
            name: 'fk_shop_workgroup_id',
            columnNames: ['workgroup_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'workgroup',
            referencedSchema: 'organization',
            onDelete: 'CASCADE',
          },
        ],
      }),
      true,
    );

    await queryRunner.createIndex(
      'product.shop',
      new TableIndex({
        name: 'idx_product_shop_name',
        columnNames: ['name'],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('product.shop', true, true, true);
    await queryRunner.dropForeignKey('product.shop', 'fk_shop_workgroup_id');
  }
}
