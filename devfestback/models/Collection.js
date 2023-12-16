import mongoose from "mongoose";

const collectionSchema=new mongoose.Schema(
    {
        personId:{
            type:mongoose.Types.ObjectId,
            ref:"User"
        },
        sosId:{
            type:mongoose.Types.ObjectId,
            ref:"User"
        }
        ,
        name:{
            type:String,
            required:true,

        },
        image:{
            type:String,
            required:true,
        },
        type:{
            type:String,
            required:true,
            enum:['money','product']
        },
        montant:{
            type:Number,
        },
        visibility:{
            type:Boolean,
            default:true
        },
        points:{
            type:Number,
            default:0
        },
        price:{
            type:Number,
        }
        
    },{timestamps:true}
);
export default mongoose.model("Collection",collectionSchema)