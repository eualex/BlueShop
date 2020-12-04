"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Yup = __importStar(require("yup"));
const Eletronics_1 = __importDefault(require("../models/Eletronics"));
const eletronics_view_1 = __importDefault(require("../views/eletronics_view"));
exports.default = {
    async index(req, res) {
        const eletronicsRepository = typeorm_1.getRepository(Eletronics_1.default);
        const products = await eletronicsRepository.find({
            relations: ['images']
        });
        return res.json(eletronics_view_1.default.renderMany(products));
    },
    async show(req, res) {
        const eletronicsRepository = typeorm_1.getRepository(Eletronics_1.default);
        const { id } = req.params;
        const product = await eletronicsRepository.findOneOrFail({
            relations: ["images"],
            where: { id }
        });
        return res.json(eletronics_view_1.default.render(product));
    },
    async store(req, res) {
        const eletronicsRepository = typeorm_1.getRepository(Eletronics_1.default);
        const requestImages = req.files;
        const images = requestImages.map(image => {
            return { path: image.filename };
        });
        const { name, price, description, item, brand } = req.body;
        const data = { name, price, description, item, brand, images };
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            price: Yup.number().required(),
            description: Yup.string().required(),
            item: Yup.string().required(),
            brand: Yup.string(),
            images: Yup.array(Yup.object().shape({
                path: Yup.string().required()
            }))
        });
        await schema.validate(data, { abortEarly: false });
        const product = eletronicsRepository.create(data);
        await eletronicsRepository.save(product);
        return res.status(201).json(eletronics_view_1.default.render(product));
    },
    async update(req, res) {
        const eletronicRespository = typeorm_1.getRepository(Eletronics_1.default);
        const { id } = req.params;
        const { name, price, description, brand, item } = req.body;
        const data = {
            name,
            price,
            description,
            item,
            brand,
        };
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            price: Yup.number().required(),
            description: Yup.string().required(),
            item: Yup.string().required(),
            brand: Yup.string(),
        });
        await schema.validate(data, { abortEarly: false });
        const resUpdate = await eletronicRespository.update(id, data);
        return !!resUpdate.affected
            ? res.status(200).json({ message: "Product updated with success :)" })
            : res.status(500);
    },
};
