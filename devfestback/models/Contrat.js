const mongoose=require('mongoose')

const PostSchema = new mongoose.Schema(
    {
        title :{ type:String,required:true,unique:true},
        desc:{type:String,required:true},
        signature:{type:String},
        Idsos:{type:mongoose.Types.ObjectId,ref:'User',required:true},
        Idcom:{type:mongoose.Types.ObjectId,ref:'User',required:true}
        //remplace createdAt
    },{timestamps:true}
)
module.exports= mongoose.model("Post",PostSchema)