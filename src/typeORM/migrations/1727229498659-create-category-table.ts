import { MigrationInterface, QueryRunner, Table, TableIndex } from 'typeorm';
import {
  BASE_COLUMNS,
  IS_ACTIVE_COLUMN,
  NAME_COLUMN,
  SLUG_COLUMN,
} from '../common/columns';

export class CreateCategoryTable1727229498659 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'category',
        schema: 'product',
        columns: [
          ...BASE_COLUMNS,
          SLUG_COLUMN,
          NAME_COLUMN,
          IS_ACTIVE_COLUMN,
          {
            name: 'is_common',
            type: 'boolean',
            default: false,
          },
          {
            name: 'shop_id',
            type: 'uuid',
            foreignKeyConstraintName: 'fk_category_shop_id',
          },
        ],
        foreignKeys: [
          {
            name: 'fk_category_shop_id',
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
      'product.category',
      new TableIndex({
        name: 'idx_product_category_name',
        columnNames: ['name'],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('product.category', true, true, true);
    await queryRunner.dropForeignKey('product.category', 'fk_category_shop_id');
  }
}
