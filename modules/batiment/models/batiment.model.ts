import mongoose from 'mongoose';

const { Schema } = mongoose;

const BatimentSchema = new Schema(
    {
        nom: { type: String, required: true },
        nbr_niveau: { type: Number, required: true, default: 0 },
        description: { type: String, required: true },
        adresse: { type: String, required: true },
    },

    {
        timestamps: true,
    }
);

const Batiment = mongoose.model('Batiment', BatimentSchema);

export default Batiment;
