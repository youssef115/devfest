import mongoose from 'mongoose';

const ContratSchema = new mongoose.Schema(
    {
        title :{ type:String,required:true,unique:true},
        desc:{type:String,required:true},
        signature:{type:String},
        Idsos:{type:mongoose.Types.ObjectId,ref:'User',required:true},
        Idcom:{type:mongoose.Types.ObjectId,ref:'User',required:true}
        //remplace createdAt
    },{timestamps:true}
)
export default  mongoose.model("Contrat",ContratSchema)