import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createImagesEletronics1605452651340 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

    queryRunner.createTable(
      new Table({
        name: "eletronic-image",
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
            name: "eletronic_id",
            type: "uuid",
          },
        ],
        foreignKeys: [
          {
            name: "EletronicImage",
            columnNames: ["eletronic_id"],
            referencedTableName: "eletronics",
            referencedColumnNames: ["id"],
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable("eletronic-image");
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
  }
}
