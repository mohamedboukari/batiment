import { INiveau } from './../../niveau/types/types';
import { BatimentDto, IBatiment } from './../types/types';
import Niveau from '../../niveau/models/niveau.model.ts';
import Batiment from '../models/batiment.model.ts';

export const getAllbatiments = async (): Promise<IBatiment[]> => {
    const batiments = await Batiment.find();
    return batiments;
};

export const getbatimentById = async (id: string): Promise<IBatiment> => {
    const batiment = await Batiment.findById(id).lean();
    if (!batiment) {
        throw new Error('Could not find batiment');
    }
    return batiment;
};
export const getbatimentByName = async (name: string): Promise<IBatiment> => {
    const batiment = await Batiment.findOne({ pseudo: name }).lean();
    if (!batiment) {
        throw new Error('Could not find batiment');
    }
    return batiment;
};

export const createbatiment = async (
    batimentData: BatimentDto
): Promise<IBatiment> => {
    const data = { ...batimentData, nbr_niveau: 0 };

    const newbatiment = new Batiment(data);
    const savedbatiment = await newbatiment.save();
    return savedbatiment;
};

export const updatebatiment = async (
    id: string,
    batimentData: typeof Batiment
): Promise<IBatiment> => {
    const newBat = await Batiment.findByIdAndUpdate(id, batimentData, {
        new: true,
    });
    if (!newBat) throw new Error('batiment not found');
    return newBat;
};
export const construction = async (
    id: string
): Promise<{ batiment: IBatiment; niveau: INiveau }> => {
    const oldNiveau = await Niveau.findOne({ id_batiment: id });
    if (!oldNiveau) throw Error('batiment not found');
    if (oldNiveau.etat_construction)
        throw Error('Niveau en cour de construction');

    const batiment = await Batiment.findByIdAndUpdate(
        id,
        {
            $inc: { nbr_niveau: 1 },
        },
        { new: true }
    );
    if (!batiment) {
        throw Error('batiment not found');
    }
    const niveau = (await Niveau.findOneAndUpdate(
        { id_batiment: id },
        { etat_construction: true },
        { new: true }
    )) as INiveau;

    return { batiment, niveau };
};
export const deletebatiment = async (id: string): Promise<IBatiment | null> => {
    return await Batiment.findByIdAndDelete(id);
};
