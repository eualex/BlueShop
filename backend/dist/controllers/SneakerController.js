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
const Sneakers_1 = __importDefault(require("../models/Sneakers"));
const sneakers_view_1 = __importDefault(require("../views/sneakers_view"));
exports.default = {
    async index(req, res) {
        const sneakersRepository = typeorm_1.getRepository(Sneakers_1.default);
        const products = await sneakersRepository.find({
            relations: ["images"],
        });
        return res.json(sneakers_view_1.default.renderMany(products));
    },
    async show(req, res) {
        const sneakersRespository = typeorm_1.getRepository(Sneakers_1.default);
        const { id } = req.params;
        const product = await sneakersRespository.findOneOrFail({
            relations: ["images"],
            where: { id },
        });
        return res.json(sneakers_view_1.default.render(product));
    },
    async store(req, res) {
        const sneakersRepository = typeorm_1.getRepository(Sneakers_1.default);
        const requestImages = req.files;
        const images = requestImages.map((image) => {
            return { path: image.filename };
        });
        const { name, price, description, genre, brand, design } = req.body;
        const data = {
            name,
            price,
            description,
            genre,
            brand,
            design,
            images,
        };
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            price: Yup.number().required(),
            description: Yup.string().required(),
            genre: Yup.string().required(),
            brand: Yup.string(),
            design: Yup.string(),
            images: Yup.array(Yup.object().shape({
                path: Yup.string().required(),
            })),
        });
        await schema.validate(data, { abortEarly: false });
        const product = sneakersRepository.create(data);
        await sneakersRepository.save(product);
        return res.status(201).json(sneakers_view_1.default.render(product));
    },
    async update(req, res) {
        const sneakersRespository = typeorm_1.getRepository(Sneakers_1.default);
        const { id } = req.params;
        const { name, price, description, genre, brand, design } = req.body;
        const data = {
            name,
            price,
            description,
            genre,
            brand,
            design,
        };
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            price: Yup.number().required(),
            description: Yup.string().required(),
            genre: Yup.string().required(),
            brand: Yup.string(),
            design: Yup.string(),
        });
        await schema.validate(data, { abortEarly: false });
        const resUpdate = await sneakersRespository.update(id, data);
        return !!resUpdate.affected
            ? res.status(200).json({ message: "Product updated with success :)" })
            : res.status(500);
    },
};
