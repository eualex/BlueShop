import { Router } from "express";
import multer from "multer";

import UserController from "./controllers/UserController";
import AuthController from "./controllers/AuthController";
import SneakerController from "./controllers/SneakerController";
import EletronicController from "./controllers/EletronicController";

import UploadConfig from "./config/upload";
import authMiddleware from "./middlewares/UserMIddleware";

const routes = Router();
const upload = multer({
  storage: UploadConfig.storage,
  limits: UploadConfig.limits,
});

routes.post("/auth", AuthController.authenticate);
routes.post("/users", UserController.store);
routes.get("/user", authMiddleware, UserController.index);

routes.get("/sneakers", SneakerController.index);
routes.get("/sneaker/:id", SneakerController.show);
routes.post("/sneaker", authMiddleware, upload.array("images"), SneakerController.store);
routes.put("/sneaker/:id", authMiddleware, SneakerController.update);

routes.get("/eletronics", EletronicController.index);
routes.get("/eletronic/:id", EletronicController.show);
routes.post("/eletronic", authMiddleware, upload.array("images"), EletronicController.store);
routes.put("/eletronic/:id", authMiddleware, EletronicController.update);

export default routes;
