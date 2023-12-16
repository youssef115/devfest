import Collection from "../models/Collection";

export const addCollection=async (req,res)=>{
    try{
        const checkUser =await User.findById(req.body.personId)
        const checkSos=await User.findById(req.body.sosId)
        if(!checkUser || !checkSos){
            return res.status(404).json({
                success:false,
                message:"the user or the sos provided does not exist"
            })

        }
        const collection = new Collection({
            ...req.body
        })
        const newCollection =await collection.save()
        return res.status(200).json({
            success:true,
            message:"a new collection was created successfully",
            data:newCollection
        })
    }catch(err){
        console.log(err);
        return res.status(500).json({
            success:false,
            message:"something went wrong"
        })
    }
}

export const updateCollection=async (req,res)=>{

    try{
    const idCollection=req.params.idCollection
        
        const collection =await Collection.findById(idCollection)
        if(!collection)
        return res.status(404).json({
            success:false,
            message:"the collection you looking for is not exist "
        })

        const updateCollection =await Collection.findByIdAndUpdate(idCollection,{$set:req.body
            
        },{new:true})
        return res.status(200).json({
            success:true,
            message:"success update the collection",
            data:updateCollection
        })
    }catch(err){
        console.log(err.message)
        return res.status(500).json({
            success:false,
            message:"something went wrong"
        })
    }

}

export const deleteCollection=async(req,res)=>{
 try{
    const idCollection=req.params.idCollection

        await Collection.findByIdAndDelete(idCollection)
        return res.status(200).json({
            success:true,
            message:"success the collection is deleted succfully"
        })
 }catch(err){
    console.log(err.message)
    return res.status(500).json({
        success:false,
        message:"something went wrong"
    })
 }
}

export const getOneCollection=async(req,res)=>{
    const idCollection=req.params.idCollection;

    try{
            const collection=await Collection.findById(idCollection)
            return res.status(200).json({
                success:true,
                message:"success to find the collection by id ",
                data:collection
            })
    }catch(err){
        console.log(err.message)
        return res.status(500).json({
            success:false,
            message:"something went wrong"
        })
    }

}

export const getAllCollection=async(req,res)=>{
    try{
        const collections=await Collection.find();
        return res.status(200).json({
            success:true,
            message:"the collection list ",
            data:collections
        })

    }catch(err){
        console.log(err.message)
        return res.status(500).json({
            success:false,
            message:"something went wrong"
        })
    }
}