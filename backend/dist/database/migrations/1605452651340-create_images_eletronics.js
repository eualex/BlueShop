"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createImagesEletronics1605452651340 = void 0;
const typeorm_1 = require("typeorm");
class createImagesEletronics1605452651340 {
    async up(queryRunner) {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
        queryRunner.createTable(new typeorm_1.Table({
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
        }));
    }
    async down(queryRunner) {
        queryRunner.dropTable("eletronic-image");
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    }
}
exports.createImagesEletronics1605452651340 = createImagesEletronics1605452651340;
