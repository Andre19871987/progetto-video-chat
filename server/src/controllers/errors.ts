import { Request, Response } from 'express';

export type ExpressController = (req: Request, res: Response) => Promise<void>;

export const errorHandler = (controller: ExpressController): ExpressController => {
    const decoratedController = async (req: Request, res: Response): Promise<void> => {
        try {
            await controller(req, res);
        } catch (error) {
            console.error(error);
            res.status(500).json('Internal server error');
        }
    };
    return decoratedController;
};
