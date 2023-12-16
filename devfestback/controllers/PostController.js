import Post  from '../models/Post.js'

export const getPostbyid = async (req,res)=>{
    try{
    const post=await Post.findById(req.params.id)
    res.status(200).json({
        success:true,
        message:"post successfully finded",
        data:post
    })
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:"something went wrong"
        })
    }
}
export const addPost = async(req,res)=>{
   try {
    const newpost= new Post({
      title :req.body.title,
      desc:req.body.desc,
      img:req.body.img,
      Idsos:req.body.Idsos,
      Idcom:req.body.Idcom
   })
   const savedproduct= await newpost.save();
   res.status(201).json({
    success:true,
    message:"the post is added successfully",
    data:savedproduct
   }) 
   } catch (error) {
    res.status(500).json({
        success:false,
        message:"something went wrong"
    })
   }
}
export const getPosts = async(req,res)=>{
    try {
       const posts = await Post.find()  
        res.status(200).json({
            success:true,
            message:"post get successfully",
            data:posts
        } )  
    } catch (error) {
     res.status(500).json({
        success:false,
        message:"something went wrong"
     })
    }
}

export const updatePost = async(req,res)=>{
    try {
        const updatepost=await Post.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true})
        res.status(200).json({
            success:true,
            message:"post updated successfully",
            data:updatepost
        })
    } catch (error) {
     res.status(500).json({
        success:false,
        message:"something went wrong"
     })
    }
}

export const deletePost = async(req,res)=>{
    try{
        await Post.findByIdAndDelete(req.params.id)
        res.status(200).json(
            {
                success:true,
                message:'post has been deleted'
            })
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:"something went wrong"
        })
    }
}

