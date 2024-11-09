import {
    getAllbatiments,
    getbatimentById,
    createbatiment,
    updatebatiment,
    deletebatiment,
    getbatimentByName,
    construction,
} from '../services/batiment.service.js';

export const getbatimentsHandler = async (_req, res) => {
    try {
        const batiments = await getAllbatiments();
        res.status(200).json(batiments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getbatimentHandler = async (req, res) => {
    try {
        const batiment = await getbatimentById(req.params.id);
        if (!batiment) {
            return res.status(404).json({ message: 'batiment not found' });
        }
        res.status(200).json(batiment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
export const getbatimentByNameHandler = async (req, res) => {
    try {
        const batiment = await getbatimentByName(req.params.name);
        if (!batiment) {
            return res.status(404).json({ message: 'batiment not found' });
        }
        res.status(200).json(batiment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const createbatimentHandler = async (req, res) => {
    const batimentDTO = req.body;

    try {
        const batiment = await createbatiment(batimentDTO);

        res.status(201).json(batiment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const updatebatimentHandler = async (req, res) => {
    const batimentDTO = req.body;

    try {
        const batiment = await updatebatiment(req.params.id, batimentDTO);
        if (!batiment) {
            return res.status(404).json({ message: 'batiment not found' });
        }
        res.status(200).json(batiment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
export const constructionHandler = async (req, res) => {
    const { id } = req.params;

    try {
        const batiment = await construction(id);

        res.status(200).json(batiment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const deletebatimentHandler = async (req, res) => {
    try {
        const batiment = await deletebatiment(req.params.id);
        if (!batiment) {
            return res.status(404).json({ message: 'batiment not found' });
        }
        res.status(200).json({ message: 'batiment deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
