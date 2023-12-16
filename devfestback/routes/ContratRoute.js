import express  from "express";
import { addContrat,getContrats,updateContrat,deleteContrat,getContratbyid } from "../Controller/ContratController"
const router = express.Router();

router.get("/getContrat/:id",getContratbyid)
router.get("/all",getContrats)
router.Contrat("/addContrat",addContrat)
router.put("/updateContrat/:id",updateContrat)
router.delete("/deleteContrat/:id",deleteContrat)

export default router;