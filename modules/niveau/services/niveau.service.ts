import Batiment from '../../batiment/models/batiment.model.ts';
import Niveau from '../models/niveau.model.ts';
import { INiveau, NiveauDto } from '../types/types.ts';
export const getAllniveaus = async (): Promise<INiveau[]> => {
    const niveaus = await Niveau.find().lean();
    return niveaus;
};

export const getniveauById = async (id: string): Promise<INiveau> => {
    const niveau = await Niveau.findById(id).lean();
    if (!niveau) {
        throw new Error('niveau not found');
    }
    return niveau;
};

export const createniveau = async (niveauData: NiveauDto): Promise<INiveau> => {
    const bat = await Batiment.findById(niveauData.id_batiment);
    if (!bat) {
        throw new Error('batiment not found');
    }
    const data = { ...niveauData, etat_construction: false };
    const newniveau = new Niveau(data);
    const savedniveau = await newniveau.save();
    return savedniveau;
};

export const updateniveau = async (
    id: string,
    niveauData: INiveau
): Promise<INiveau> => {
    const niveau = await Niveau.findByIdAndUpdate(id, niveauData, {
        new: true,
    });
    if (!niveau) {
        throw new Error('niveau not found');
    }
    return niveau;
};

export const deleteniveau = async (id: string): Promise<INiveau | null> => {
    return await Niveau.findByIdAndDelete(id);
};
