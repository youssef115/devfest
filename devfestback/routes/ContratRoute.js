import express  from "express";
import { addContrat,getContrats,updateContrat,deleteContrat,getContratbyid } from "../controllers/ContratController.js"
import { verifyAdmin, verifySos, verifyAssociation } from "./utils/verifyToken.js";


const router = express.Router();

router.get("/getContrat/:id",getContratbyid)
router.get("/all",verifyAssociation,getContrats)
router.post("/addContrat", verifySos,addContrat)
router.put("/updateContrat/:id", verifyAssociation,updateContrat)
router.delete("/deleteContrat/:id",verifyAssociation,deleteContrat)

export default router;