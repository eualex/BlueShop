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

routes.post("/users", UserController.store);
routes.post("/auth", AuthController.authenticate);

routes.post("/sneaker", upload.array("images"), SneakerController.store);
routes.put("/sneaker/:id", SneakerController.update);
// routes.delete("/sneaker/:id", SneakerController.delete);
routes.get("/sneakers", SneakerController.index);
routes.get("/sneaker/:id", SneakerController.show);

routes.post("/eletronic", upload.array("images"), EletronicController.store);
routes.put("/eletronic/:id", EletronicController.update);
// routes.delete("/eletronics", EletronicController.delete);
routes.get("/eletronic/:id", EletronicController.show);
// routes.get('/products/:category', ProductController.show);

export default routes;
