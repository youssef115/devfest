import Post  from '../models/Post'

export const getPostbyid = async (req,res)=>{
    try{
    const post=await Post.findById(req.params.id)
    res.status(200).json(post )
    }
    catch(err){
        res.status(500).json(err)
    }
}
export const addPost = async(req,res)=>{
   try {
    const newpost= new Post({
      title :req.body.title,
      desc:req.body.desc,
      img:req.body.img,
      Idsos:req.body.idsos
   })
   const savedproduct= await newpost.save();
   res.status(201).json(savedproduct) 
   } catch (error) {
    res.status(500).json(err)
   }
}
export const getPosts = async(req,res)=>{
    try {
        posts = await Post.find()  
        res.status(200).json(posts )  
    } catch (error) {
     res.status(500).json(err)
    }
}

export const updatePost = async(req,res)=>{
    try {
        const updatepost=await Post.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true})
        res.status(200).json(updatepost)
    } catch (error) {
     res.status(500).json(err)
    }
}

export const deletePost = async(req,res)=>{
    try{
        await Post.findByIdAndDelete(req.params.id)
        res.status(200).json('post has been deleted')
    }
    catch(err){
        res.status(500).json(err)
    }
}

