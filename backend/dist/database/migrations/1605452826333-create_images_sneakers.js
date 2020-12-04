"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createImagesSneakers1605452826333 = void 0;
const typeorm_1 = require("typeorm");
class createImagesSneakers1605452826333 {
    async up(queryRunner) {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
        queryRunner.createTable(new typeorm_1.Table({
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
        }));
    }
    async down(queryRunner) {
        queryRunner.dropTable('sneaker-image');
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    }
}
exports.createImagesSneakers1605452826333 = createImagesSneakers1605452826333;
