"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEletronics1605119785007 = void 0;
const typeorm_1 = require("typeorm");
class createEletronics1605119785007 {
    async up(queryRunner) {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
        queryRunner.createTable(new typeorm_1.Table({
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
                    name: "brand",
                    type: "varchar",
                },
            ],
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("eletronics");
        await queryRunner.query('DROP EXTENSION "uuid-ossp"');
    }
}
exports.createEletronics1605119785007 = createEletronics1605119785007;
