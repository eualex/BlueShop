"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sneakers_image_view_1 = __importDefault(require("./sneakers_image_view"));
exports.default = {
    render(sneaker) {
        return {
            id: sneaker.id,
            name: sneaker.name,
            price: sneaker.price,
            description: sneaker.description,
            brand: sneaker.brand,
            Sdesign: sneaker.design,
            Sgenre: sneaker.genre,
            images: sneakers_image_view_1.default.renderMany(sneaker.images)
        };
    },
    renderMany(sneakers) {
        return sneakers.map(sneaker => this.render(sneaker));
    }
};
