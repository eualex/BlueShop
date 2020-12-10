import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createProducts1607604766975 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

    queryRunner.createTable(
      new Table({
        name: "products",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "price",
            type: "integer",
          },
          {
            name: "description",
            type: "varchar",
          },
          {
            name: "genre",
            type: "varchar",
          },
          {
            name: "brand",
            type: "varchar",
          },
          {
            name: "category",
            type: "varchar",
          },
          {
            name: "type",
            type: "varchar",
          },
          {
            name: "deleted",
            type: "boolean",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("products");
    await queryRunner.query('DROP EXTENSION "uuid-ossp"');
  }
}
