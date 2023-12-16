import mongoose from 'mongoose'

const PostSchema = new mongoose.Schema(
    {
        title :{ type:String,required:true,unique:true},
        desc:{type:String,required:true},
        img:{type:String,required:true},
        visibility:{type:Boolean,required:true,default:true},
        Idsos:{type:mongoose.Types.ObjectId,ref:'User',required:true},
        Idcom:{type:mongoose.Types.ObjectId,ref:'User',required:false}
        //remplace createdAt
    },{timestamps:true}
)
export default mongoose.model("Post",PostSchema)