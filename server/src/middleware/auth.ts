import { Request, Response } from 'express';

export const checkAuth = (req: Request, res: Response, next: () => void): void => {
    if (req.session && req.session.email) {
        next();
    } else {
        res.status(401).json('User not authenticated');
    }
};
