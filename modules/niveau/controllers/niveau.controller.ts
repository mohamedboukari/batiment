import { Request, Response } from 'express';
import {
    getAllniveaus,
    getniveauById,
    createniveau,
    updateniveau,
    deleteniveau,
} from '../services/niveau.service.ts';

export const getniveaus = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const niveaus = await getAllniveaus();
        res.status(200).json(niveaus);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getniveau = async (req: Request, res: Response): Promise<void> => {
    try {
        const niveau = await getniveauById(req.params.id);
        if (!niveau) {
            res.status(404).json({ message: 'niveau not found' });
        }
        res.status(200).json(niveau);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const createniveauHandler = async (
    req: Request,
    res: Response
): Promise<void> => {
    const niveauDTO = req.body;

    try {
        const niveau = await createniveau(niveauDTO);
        res.status(201).send(niveau);
    } catch (error) {
        console.log('Error creating niveau');

        res.status(400).json({ error: error.message });
    }
};

export const updateniveauHandler = async (
    req: Request,
    res: Response
): Promise<void> => {
    const niveauDTO = req.body;

    try {
        const niveau = await updateniveau(req.params.id, niveauDTO);
        if (!niveau) {
            res.status(404).json({ message: 'niveau not found' });
        }
        res.status(200).json(niveau);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const deleteniveauHandler = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const niveau = await deleteniveau(req.params.id);
        if (!niveau) {
            res.status(404).json({ message: 'niveau not found' });
        }
        res.status(200).json({ message: 'niveau deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
