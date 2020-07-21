import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => res.json('TEST-API'));

export default routes;
