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
const Eletronics_1 = __importDefault(require("./Eletronics"));
let EletronicsImages = class EletronicsImages {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('increment'),
    __metadata("design:type", Number)
], EletronicsImages.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], EletronicsImages.prototype, "path", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Eletronics_1.default, eletronic => eletronic.images),
    typeorm_1.JoinColumn({ name: 'eletronic_id' }),
    __metadata("design:type", Eletronics_1.default)
], EletronicsImages.prototype, "eletronic", void 0);
EletronicsImages = __decorate([
    typeorm_1.Entity('eletronic-image')
], EletronicsImages);
exports.default = EletronicsImages;
