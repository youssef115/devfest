import Contrat  from '../models/Contrat'

export const getContratbyid = async (req,res)=>{
    try{
    const Contrat=await Contrat.findById(req.params.id)
    res.status(200).json(Contrat )
    }
    catch(err){
        res.status(500).json(err)
    }
}
export const addContrat = async(req,res)=>{
   try {
    const newContrat= new Contrat({
      title :req.body.title,
      desc:req.body.desc,
      img:req.body.img,
      Idsos:req.body.idsos
   })
   const savedproduct= await newContrat.save();
   res.status(201).json(savedproduct) 
   } catch (error) {
    res.status(500).json(err)
   }
}
export const getContrats = async(req,res)=>{
    try {
        Contrats = await Contrat.find()  
        res.status(200).json(Contrats )  
    } catch (error) {
     res.status(500).json(err)
    }
}

export const updateContrat = async(req,res)=>{
    try {
        const updateContrat=await Contrat.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true})
        res.status(200).json(updateContrat)
    } catch (error) {
     res.status(500).json(err)
    }
}

export const deleteContrat = async(req,res)=>{
    try{
        await Contrat.findByIdAndDelete(req.params.id)
        res.status(200).json('Contrat has been deleted')
    }
    catch(err){
        res.status(500).json(err)
    }
}

