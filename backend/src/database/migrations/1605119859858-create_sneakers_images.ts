import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createSneakersImages1605119859858 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

    queryRunner.createTable(
      new Table({
        name: "sneaker-image",
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
            name: 'sneaker_id',
            type: 'uuid',
          }
        ],
        foreignKeys: [
          {
            name: 'ImageSneaker',
            columnNames: ['sneaker_id'],
            referencedTableName: 'sneakers',
            referencedColumnNames: ['id'],
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          }
        ]
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable('sneaker-image');
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
  }
}
