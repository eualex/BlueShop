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
const Sneakers_1 = __importDefault(require("./Sneakers"));
let SneakersImages = class SneakersImages {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('increment'),
    __metadata("design:type", Number)
], SneakersImages.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], SneakersImages.prototype, "path", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Sneakers_1.default, sneaker => sneaker.images),
    typeorm_1.JoinColumn({ name: 'sneaker_id' }),
    __metadata("design:type", Sneakers_1.default)
], SneakersImages.prototype, "sneaker", void 0);
SneakersImages = __decorate([
    typeorm_1.Entity('sneaker-image')
], SneakersImages);
exports.default = SneakersImages;
