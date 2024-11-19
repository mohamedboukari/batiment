import mongoose from 'mongoose';

const { Schema } = mongoose;

const NiveauSchema = new Schema(
    {
        nom: { type: String, required: true },
        nbr_chambre: { type: Number, required: true },

        id_batiment: {
            type: String,
            ref: 'Batiment',
            required: true,
        },
        etat_construction: { type: Boolean, default: false },
    },
    {
        timestamps: true,
    }
);

const Niveau = mongoose.model('Niveau', NiveauSchema);

export default Niveau;
