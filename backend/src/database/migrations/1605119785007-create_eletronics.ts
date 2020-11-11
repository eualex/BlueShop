import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createEletronics1605119785007 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

    queryRunner.createTable(
      new Table({
        name: "eletronics",
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
            name: "item",
            type: "varchar",
          },
          {
            name: "category",
            type: "varchar",
          },
          {
            name: "brand",
            type: "varchar",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("eletronics");
    await queryRunner.query('DROP EXTENSION "uuid-ossp"');
  }
}
