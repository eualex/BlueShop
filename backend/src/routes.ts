import { Router } from 'express';

import UserController from './controllers/UserController';
import AuthController from './controllers/AuthController';

import authMiddleware from './middlewares/UserMIddleware';

const routes = Router();

routes.post('/users', UserController.store);
routes.post('/auth', AuthController.authenticate);

export default routes;