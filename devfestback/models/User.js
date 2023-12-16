import mongoose from 'mongoose';

const User = new mongoose.Schema(
    {
      
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: true,
            enum: ["person", "sos", "association"]
        },
        nom: {
            type: String,
            required: true,
        },
        prenom: {
            type: String,
        },
        nbre_etoile: {
            type: Number,
            default: 0
        },
        nationality: {
            type: String,

        },
        carte_Bancaire: {
            type: Number,
        },
        matricule: {
            type: String,
        },
        image: {
            type: String,
        },
        organisation: {
            type: String,
            enum: ["Croissant Rouge", "Croix Rouge", "Organisation mondiale de la Santé", "Corps mondial de secours"]
        },
        domaine: {
            type: String,
        },
        description: {
            type: String,
        },

    },
    { timestamps: true }
)

export default mongoose.model("User", User);