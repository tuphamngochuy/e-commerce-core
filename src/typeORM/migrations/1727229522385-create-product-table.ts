import { MigrationInterface, QueryRunner, Table, TableIndex } from 'typeorm';
import { BASE_COLUMNS, NAME_COLUMN } from '../common/columns';

export class CreateProductTable1727229522385 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'product',
        schema: 'product',
        columns: [
          ...BASE_COLUMNS,
          NAME_COLUMN,
          {
            name: 'quantity',
            type: 'int',
            default: 0,
          },
          {
            name: 'price',
            type: 'float',
            default: 0,
          },
          {
            name: 'category_id',
            type: 'uuid',
            foreignKeyConstraintName: 'fk_product_category_id',
          },
          {
            name: 'shop_id',
            type: 'uuid',
            foreignKeyConstraintName: 'fk_product_shop_id',
          },
        ],
        foreignKeys: [
          {
            name: 'fk_product_category_id',
            columnNames: ['category_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'category',
            onDelete: 'CASCADE',
          },
          {
            name: 'fk_product_shop_id',
            columnNames: ['shop_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'shop',
            onDelete: 'CASCADE',
          },
        ],
      }),
      true,
    );

    await queryRunner.createIndex(
      'product.product',
      new TableIndex({
        name: 'idx_product_product_name',
        columnNames: ['name'],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('product.product', true, true, true);
    await queryRunner.dropForeignKey(
      'product.product',
      'fk_product_category_id',
    );
    await queryRunner.dropForeignKey('product.product', 'fk_product_shop_id');
  }
}
