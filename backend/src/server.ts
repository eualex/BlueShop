import 'reflect-metadata';
import express from 'express';
import cors from 'cors'; 
import 'express-async-errors';

import './database/connection';

import routes from './routes';
import errorHandlers from './errors/handler';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errorHandlers);

app.listen(3333, () => console.log('App is runing on http://localhost:3333'));