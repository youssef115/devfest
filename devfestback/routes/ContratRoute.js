import express  from "express";
import { addContrat,getContrats,updateContrat,deleteContrat,getContratbyid } from "../controllers/ContratController.js"
const router = express.Router();

router.get("/getContrat/:id",getContratbyid)
router.get("/all",getContrats)
router.post("/addContrat",addContrat)
router.put("/updateContrat/:id",updateContrat)
router.delete("/deleteContrat/:id",deleteContrat)

export default router;