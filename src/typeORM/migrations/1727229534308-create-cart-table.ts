import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { CartStatus } from '../../graphQL/enums/status';
import { BASE_COLUMNS } from '../common/columns';

export class CreateCartTable1727229534308 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'cart',
        schema: 'purchase',
        columns: [
          ...BASE_COLUMNS,
          {
            name: 'status',
            type: 'enum',
            enumName: 'cart_status',
            enum: Object.values(CartStatus),
          },
          {
            name: 'user_id',
            type: 'uuid',
            foreignKeyConstraintName: 'fk_cart_user_id',
          },
        ],
        foreignKeys: [
          {
            name: 'fk_cart_user_id',
            columnNames: ['user_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'user',
            referencedSchema: 'identity',
            onDelete: 'CASCADE',
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('purchase.cart', true, true, true);
    await queryRunner.dropForeignKey('purchase.cart', 'fk_cart_user_id');
  }
}
