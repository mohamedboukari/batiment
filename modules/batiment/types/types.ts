import { Types } from 'mongoose';

export type BatimentDto = {
    nom: string;
    description: string;
    adresse: string;
};

export interface IBatiment {
    createdAt: NativeDate;
    updatedAt: NativeDate;
    nom: string;
    description: string;
    nbr_niveau: number;
    adresse: string;
    _id: Types.ObjectId;
}
