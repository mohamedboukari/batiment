/* eslint-disable node/no-unsupported-features/es-syntax */
import Niveau from '../../niveau/models/niveau.model.js';
import Batiment from '../models/batiment.model.js';
export const getAllbatiments = async () => {
    const batiments = await Batiment.find();
    return batiments;
};

export const getbatimentById = async (id) => {
    const batiment = await Batiment.findById(id).lean();
    return batiment;
};
export const getbatimentByName = async (name) => {
    const batiment = await batiment.findOne({ pseudo: name }).lean();
    return batiment;
};

export const createbatiment = async (batimentData) => {
    const data = { ...batimentData, nbr_niveau: 0 };

    const newbatiment = new Batiment(data);
    const savedbatiment = await newbatiment.save();
    return savedbatiment;
};

export const updatebatiment = async (id, batimentData) => {
    return await Batiment.findByIdAndUpdate(id, batimentData, { new: true });
};
export const construction = async (id) => {
    const oldNeveau = await Niveau.findOne({ id_batiment: id });
    if (!oldNeveau.etat_construction) {
        const batiment = await Batiment.findByIdAndUpdate(
            id,
            {
                $inc: { nbr_niveau: 1 },
            },
            { new: true }
        );
        const niveau = await Niveau.findOneAndUpdate(
            { id_batiment: id },
            { etat_construction: true },
            { new: true }
        );
        return { batiment, niveau };
    } else return 'Niveau en cour de construction';
};
export const deletebatiment = async (id) => {
    return await Batiment.findByIdAndDelete(id);
};
