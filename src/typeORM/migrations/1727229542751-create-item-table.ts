import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { BASE_COLUMNS } from '../common/columns';

export class CreateItemTable1727229542751 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'item',
        schema: 'purchase',
        columns: [
          ...BASE_COLUMNS,
          {
            name: 'quantity',
            type: 'int',
            default: 0,
          },
          {
            name: 'product_id',
            type: 'uuid',
            foreignKeyConstraintName: 'fk_item_product_id',
          },
          {
            name: 'cart_id',
            type: 'uuid',
            foreignKeyConstraintName: 'fk_item_purchase_id',
          },
        ],
        foreignKeys: [
          {
            name: 'fk_item_product_id',
            columnNames: ['product_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'product',
            referencedSchema: 'product',
            onDelete: 'CASCADE',
          },
          {
            name: 'fk_item_purchase_id',
            columnNames: ['cart_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'cart',
            onDelete: 'CASCADE',
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('purchase.item', true, true, true);
    await queryRunner.dropForeignKey('purchase.item', 'fk_item_product_id');
    await queryRunner.dropForeignKey('purchase.item', 'fk_item_purchase_id');
  }
}
