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
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const Yup = __importStar(require("yup"));
const User_1 = __importDefault(require("../models/User"));
const user_view_1 = __importDefault(require("../views/user_view"));
exports.default = {
    async authenticate(req, res) {
        const usersRepository = typeorm_1.getRepository(User_1.default);
        const { email, password } = req.body;
        const data = { email, password };
        const schema = Yup.object().shape({
            email: Yup.string().required(),
            password: Yup.string().required()
        });
        await schema.validate(data, {
            abortEarly: false
        });
        const user = await usersRepository.findOne({ where: { email } });
        if (!user) {
            return res.status(403).json({ message: "Email or password is incorrrect" });
        }
        const isValidPassword = await bcryptjs_1.default.compare(password, user.password);
        if (!isValidPassword) {
            return res.status(403).json({ message: "Email or password is incorrrect" });
        }
        const token = jsonwebtoken_1.default.sign({ id: user.id }, `${process.env.JWT_TOKEN}`, {
            expiresIn: "25m",
        });
        return res.json(user_view_1.default.render(user, token));
    },
};
