"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.default = (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        res.status(401).json({ message: 'Authentication required :(' });
    }
    const token = authorization === null || authorization === void 0 ? void 0 : authorization.replace('Bearer', '').trim();
    try {
        const data = jsonwebtoken_1.default.verify(token, `${process.env.JWT_TOKEN}`);
        const { id } = data;
        req.userId = id;
        return next();
    }
    catch (_a) {
        res.sendStatus(401);
    }
};
