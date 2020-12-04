"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const eletronics_image_view_1 = __importDefault(require("./eletronics_image_view"));
exports.default = {
    render(eletronics) {
        return {
            id: eletronics.id,
            name: eletronics.name,
            price: eletronics.price,
            description: eletronics.description,
            brand: eletronics.brand,
            Eitem: eletronics.item,
            images: eletronics_image_view_1.default.renderMany(eletronics.images)
        };
    },
    renderMany(eletronics) {
        return eletronics.map(eletronic => this.render(eletronic));
    }
};
