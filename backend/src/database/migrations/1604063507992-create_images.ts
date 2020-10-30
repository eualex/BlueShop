import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createImages1604063507992 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

    queryRunner.createTable(
      new Table({
        name: "image",
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()" 
          },
          {
            name: 'path',
            type: 'varchar'
          },
          {
            name: 'product_id',
            type: 'uuid',
          }
        ],
        foreignKeys: [
          {
            name: 'ImageProduct',
            columnNames: ['product_id'],
            referencedTableName: 'products',
            referencedColumnNames: ['id'],
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          }
        ]
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable('image');
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
  }
}
