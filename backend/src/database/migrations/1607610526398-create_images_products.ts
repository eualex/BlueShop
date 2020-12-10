import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createImagesProducts1607610526398 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

    queryRunner.createTable(
      new Table({
        name: "product_images",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
          },
          {
            name: "path",
            type: "varchar",
          },
          {
            name: "product_id",
            type: "uuid",
          },
        ],
        foreignKeys: [
          {
            name: "ProductImage",
            columnNames: ["product_id"],
            referencedTableName: "products",
            referencedColumnNames: ["id"],
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable("product_images");
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
  }
}
