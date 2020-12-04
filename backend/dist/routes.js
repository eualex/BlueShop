"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const UserController_1 = __importDefault(require("./controllers/UserController"));
const AuthController_1 = __importDefault(require("./controllers/AuthController"));
const SneakerController_1 = __importDefault(require("./controllers/SneakerController"));
const EletronicController_1 = __importDefault(require("./controllers/EletronicController"));
const upload_1 = __importDefault(require("./config/upload"));
const UserMIddleware_1 = __importDefault(require("./middlewares/UserMIddleware"));
const routes = express_1.Router();
const upload = multer_1.default({
    storage: upload_1.default.storage,
    limits: upload_1.default.limits,
});
routes.post("/auth", AuthController_1.default.authenticate);
routes.post("/users", UserController_1.default.store);
routes.get("/user", UserMIddleware_1.default, UserController_1.default.index);
routes.get("/sneakers", SneakerController_1.default.index);
routes.post("/sneaker", upload.array("images"), SneakerController_1.default.store);
routes.put("/sneaker/:id", SneakerController_1.default.update);
routes.get("/sneaker/:id", SneakerController_1.default.show);
routes.post("/eletronic", upload.array("images"), EletronicController_1.default.store);
routes.put("/eletronic/:id", EletronicController_1.default.update);
routes.get("/eletronics", EletronicController_1.default.index);
routes.get("/eletronic/:id", EletronicController_1.default.show);
exports.default = routes;
