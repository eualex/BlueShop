"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const EletronicsImages_1 = __importDefault(require("./EletronicsImages"));
let Eletronics = class Eletronics {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], Eletronics.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Eletronics.prototype, "name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Eletronics.prototype, "price", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Eletronics.prototype, "description", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Eletronics.prototype, "item", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Eletronics.prototype, "brand", void 0);
__decorate([
    typeorm_1.OneToMany(() => EletronicsImages_1.default, image => image.eletronic, {
        cascade: ['insert', 'update']
    }),
    typeorm_1.JoinColumn({ name: 'sneaker_id' }),
    __metadata("design:type", Array)
], Eletronics.prototype, "images", void 0);
Eletronics = __decorate([
    typeorm_1.Entity('eletronics')
], Eletronics);
exports.default = Eletronics;
