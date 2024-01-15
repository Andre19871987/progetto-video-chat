import { Request, Response } from 'express';
import prisma from '../db/client';
import bcrypt from 'bcrypt';
import { UserState } from '../models/types';
import { UserSignupBody, UserLoginBody } from './types';

export const userLogin = async (request: Request, response: Response): Promise<void> => {
    const loginBody: UserLoginBody = request.body;

    try {
        const user = await prisma.user.findUnique({
            where: {
                email: loginBody.email
            }
        });

        if (user === null) {
            console.log('LOGIN - WRONG USER');
            throw new Error(`User ${loginBody.email} not found`);
        }

        if (!(await bcrypt.compare(loginBody.password, user.password))) {
            console.log(loginBody.password);
            console.log(user.password);
            console.log('LOGIN - WRONG PASSWORD');
            throw new Error('Invalid password');
        }

        request.session.userId = user.id;
        request.session.email = user.email;
        request.session.isAdmin = user.flagAdmin;

        console.log(user);

        delete user.password;

        response.status(200).json(user);
        //        response.status(200).json('Login successful');
    }
    catch (error) {
        console.error(error);
        response.status(401).json('Invalid user or password');
    }
};

export const retrieveUser = async (request: Request, response: Response): Promise<void> => {
    const user = await prisma.user.findUnique({
        where: {
            email: request.session.email
        }
    });

    response.status(200).json(user);
};

export const userSignup = async (request: Request, response: Response): Promise<void> => {
    const newUser: UserSignupBody = request.body
    try {

        await prisma.user.create({
            data: {
                email: newUser.email,
                name: newUser.name,
                password: await bcrypt.hash(newUser.password, 12),
                username: newUser.username,
                phone: newUser.phone,
                address: newUser.address,
                img: newUser.img,
                flagAdmin: false,
                flagStatus: UserState.OFFLINE,
            }
        });

        response.status(200).json('User created successfully');
    } catch (error) {
        console.error(error);
        response.status(500).json('Si ò verificato un errore. Contatta l\'amministratore');
    }
};

export const retrieveAll = async (request: Request, response: Response): Promise<void> => {

    const users = await prisma.user.findMany({
        select: {
            email: true,
            name: true,
            img: true,
            flagStatus: true
        }
    });

    response.status(200).json(users);
}

export const logout = async (req: Request, res: Response): Promise<void> => {

    req.session.destroy((err) => {
        if (err) {
            console.error(err);
            res.status(500).json('Si è verificato un errore. Contatta l\'amministratore');
            return;
        }
        res.clearCookie('connect.sid', {
            domain: 'localhost',
            path: '/',
            httpOnly: true,
            secure: true,
            sameSite: 'none'
        });
        res.end();
    });
    
}

