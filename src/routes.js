import { Router } from 'express';
import cors from 'cors';

import UserController from './app/controllers/UserController';

const routes = Router();
routes.use(cors());

routes.get('/', (req, res) => res.json('TEST-API'));

// ROUTE PARA USERS
routes.get('/users/:uid', UserController.show);
routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.put('/users/:uid', UserController.update);
routes.delete('/users/:uid', UserController.delete);

export default routes;
