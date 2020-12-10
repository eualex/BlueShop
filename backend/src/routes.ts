import { Router } from "express";
import multer from "multer";

import UserController from "./controllers/UserController";
import AuthController from "./controllers/AuthController";
import SneakerController from "./controllers/SneakerController";
import EletronicController from "./controllers/EletronicController";
import ProductController from "./controllers/ProductController";

import UploadConfig from "./config/upload";
import checkauthMiddleware from "./middlewares/UserMIddleware";
import requireAdmin from "./middlewares/RequiresAdmin";

const routes = Router();
const upload = multer({
  storage: UploadConfig.storage,
  limits: UploadConfig.limits,
});

routes.post("/auth", AuthController.authenticate);
routes.post("/users", UserController.store);
routes.get("/user", checkauthMiddleware, UserController.index); 

routes.get("/sneakers", SneakerController.index);
routes.get("/sneaker/:id", SneakerController.show);
routes.post("/sneaker", requireAdmin, upload.array("images"), SneakerController.store);
routes.put("/sneaker/:id", requireAdmin, SneakerController.update);

routes.get("/eletronics", EletronicController.index);
routes.get("/eletronic/:id", EletronicController.show);
routes.post("/eletronic", requireAdmin, upload.array("images"), EletronicController.store);
routes.put("/eletronic/:id", requireAdmin, EletronicController.update);

routes.get("/products", ProductController.index);
routes.get("/product/:category", ProductController.show);
routes.post("/product", upload.array("images"), ProductController.store);
routes.put("/product/:id", requireAdmin, ProductController.update);
routes.delete("/product/:id", requireAdmin, ProductController.delete);

export default routes;
