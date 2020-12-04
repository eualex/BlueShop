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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const User_1 = __importDefault(require("../models/User"));
const user_view_1 = __importDefault(require("../views/user_view"));
exports.default = {
    async store(req, res) {
        const usersRepository = typeorm_1.getRepository(User_1.default);
        const { name, email, password } = req.body;
        const data = { name, email, password };
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string().required(),
            password: Yup.string().required()
        });
        await schema.validate(data, {
            abortEarly: false
        });
        const userExists = await usersRepository.findOne({ where: { email } });
        if (!!userExists) {
            return res.status(409).json({ message: 'Email already registered!' });
        }
        const user = usersRepository.create(data);
        await usersRepository.save(user);
        const id = await usersRepository.findOne({ where: { email } });
        const token = jsonwebtoken_1.default.sign({ id: user.id }, `${process.env.JWT_TOKEN}`, {
            expiresIn: "25m",
        });
        return res.status(201).json(user_view_1.default.render(user, token));
    },
    async index(req, res) {
        const userRepository = typeorm_1.getRepository(User_1.default);
        const id = req.userId;
        const user = await userRepository.findOneOrFail({ where: { id } });
        return res.json(user_view_1.default.render(user));
    }
};
