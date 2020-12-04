"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSneakers1605119922223 = void 0;
const typeorm_1 = require("typeorm");
class createSneakers1605119922223 {
    async up(queryRunner) {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
        queryRunner.createTable(new typeorm_1.Table({
            name: "sneakers",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                    generationStrategy: "uuid",
                    default: "uuid_generate_v4()",
                },
                {
                    name: 'name',
                    type: 'varchar',
                },
                {
                    name: 'price',
                    type: 'integer',
                },
                {
                    name: 'description',
                    type: 'varchar',
                },
                {
                    name: 'genre',
                    type: 'varchar',
                },
                {
                    name: 'brand',
                    type: 'varchar',
                },
                {
                    name: 'design',
                    type: 'varchar',
                },
            ],
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('sneakers');
        await queryRunner.query('DROP EXTENSION "uuid-ossp"');
    }
}
exports.createSneakers1605119922223 = createSneakers1605119922223;
