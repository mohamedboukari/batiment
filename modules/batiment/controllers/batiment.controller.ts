import {
    getAllbatiments,
    getbatimentById,
    createbatiment,
    updatebatiment,
    deletebatiment,
    getbatimentByName,
    construction,
} from '../services/batiment.service.ts';
import { Request, Response } from 'express';

export const getbatimentsHandler = async (
    _req: Request,
    res: Response
): Promise<void> => {
    try {
        const batiments = await getAllbatiments();
        res.status(200).json(batiments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getbatimentHandler = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const batiment = await getbatimentById(req.params.id);
        if (!batiment) {
            res.status(404).json({ message: 'batiment not found' });
        }
        res.status(200).json(batiment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
export const getbatimentByNameHandler = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const batiment = await getbatimentByName(req.params.name);
        if (!batiment) {
            res.status(404).json({ message: 'batiment not found' });
        }
        res.status(200).json(batiment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const createbatimentHandler = async (
    req: Request,
    res: Response
): Promise<void> => {
    const batimentDTO = req.body;

    try {
        const batiment = await createbatiment(batimentDTO);

        res.status(201).json(batiment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const updatebatimentHandler = async (
    req: Request,
    res: Response
): Promise<void> => {
    const batimentDTO = req.body;

    try {
        const batiment = await updatebatiment(req.params.id, batimentDTO);
        if (!batiment) {
            res.status(404).json({ message: 'batiment not found' });
        }
        res.status(200).json(batiment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
export const constructionHandler = async (
    req: Request,
    res: Response
): Promise<void> => {
    const { id } = req.params;

    try {
        const batiment = await construction(id);

        res.status(200).json(batiment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const deletebatimentHandler = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        await deletebatiment(req.params.id);
        res.status(200).json({ message: 'batiment deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
