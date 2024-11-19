import { Types } from 'mongoose';

export type NiveauDto = {
    nom: string;
    nbr_chambre: number;
    id_batiment: string;
};

export interface INiveau {
    createdAt: NativeDate;
    updatedAt: NativeDate;
    nom: string;
    nbr_chambre: number;
    id_batiment: string;
    etat_construction: boolean;
    _id: Types.ObjectId;
}
