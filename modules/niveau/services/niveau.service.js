import Batiment from '../../batiment/models/batiment.model.js';
import Niveau from '../models/niveau.model.js';
export const getAllniveaus = async () => {
    const niveaus = await Niveau.find().lean();
    return niveaus;
};

export const getniveauById = async (id) => {
    const niveau = await niveau.findById(id).lean();

    return niveau;
};

export const createniveau = async (niveauData) => {
    const bat = await Batiment.findById(niveauData.id_batiment);
    if (!bat) {
        return 'batiment not found';
    }
    // eslint-disable-next-line node/no-unsupported-features/es-syntax
    const data = { ...niveauData, etat_construction: false };
    const newniveau = new Niveau(data);
    const savedniveau = await newniveau.save();
    return savedniveau;
};

export const updateniveau = async (id, niveauData) => {
    return await Niveau.findByIdAndUpdate(id, niveauData, { new: true });
};

export const deleteniveau = async (id) => {
    return await Niveau.findByIdAndDelete(id);
};
