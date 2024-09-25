import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { PaymentMethod } from '../../graphQL/enums/common';
import { InvoiceStatus } from '../../graphQL/enums/status';
import { BASE_COLUMNS } from '../common/columns';

export class CreateInvoiceTable1727229596100 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'invoice',
        schema: 'purchase',
        columns: [
          ...BASE_COLUMNS,
          {
            name: 'status',
            type: 'enum',
            enumName: 'invoice_status',
            enum: Object.values(InvoiceStatus),
          },
          {
            name: 'amount',
            type: 'float',
            default: 0,
          },
          {
            name: 'payment_method',
            type: 'enum',
            enumName: 'payment_method',
            enum: Object.values(PaymentMethod),
            isNullable: true,
          },
          {
            name: 'invoice_number',
            type: 'text',
            isNullable: true,
          },
          {
            name: 'invoice_note',
            type: 'text',
            isNullable: true,
          },
          {
            name: 'cart_id',
            type: 'uuid',
            foreignKeyConstraintName: 'fk_invoice_cart_id',
          },
        ],
        foreignKeys: [
          {
            name: 'fk_invoice_cart_id',
            columnNames: ['cart_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'cart',
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('purchase.invoice', true, true, true);
    await queryRunner.dropForeignKey('purchase.invoice', 'fk_invoice_cart_id');
  }
}
