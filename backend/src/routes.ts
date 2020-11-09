import { Router } from 'express';
import multer from 'multer';

import UserController from './controllers/UserController';
import AuthController from './controllers/AuthController';
import ProductController from './controllers/ProductController';

import UploadConfig from './config/upload';
import authMiddleware from './middlewares/UserMIddleware';

const routes = Router();
const upload = multer({ storage: UploadConfig.storage, limits: UploadConfig.limits });

routes.post('/users', UserController.store);
routes.post('/auth', AuthController.authenticate);
routes.post('/product', upload.array('images'), ProductController.store);
routes.get('/products', authMiddleware, ProductController.index);
routes.get('/products/:category', authMiddleware, ProductController.show);

export default routes;