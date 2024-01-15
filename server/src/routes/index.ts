import { userRoutes } from './user.routes';
import { Express, Router } from 'express';

export const routes = (app: Express): void => {
    const router = Router();

    userRoutes(router);

    app.use('/rest', router);
};
