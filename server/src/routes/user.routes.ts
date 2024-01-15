import express, { Router } from 'express';
import { userLogin, retrieveUser, userSignup, retrieveAll } from '../controllers/user.controllers';
import { checkAuth } from '../middleware/auth';
import { errorHandler } from '../controllers/errors';

export const userRoutes = (expressRouter: Router): void => {
    const userRouter = express.Router();

    userRouter.post('/login', errorHandler(userLogin));
    userRouter.get('/', [checkAuth], errorHandler(retrieveUser));
    userRouter.post('/signup', errorHandler(userSignup));
    userRouter.get('/all', errorHandler(retrieveAll));

    expressRouter.use('/user', userRouter);
};
