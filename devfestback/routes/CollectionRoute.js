import express from 'express';

import { addCollection, getAllCollection, getOneCollection, updateCollection,deleteCollection } from '../controllers/CollectionController.js'
import { verifyAdmin, verifySos, verifyAssociation } from "./utils/verifyToken.js";


const router=express.Router();

router.post("/", verifySos, addCollection)
router.get("/:idCollection",getOneCollection)
router.get("/",getAllCollection)
router.put("/:idCollection",verifySos,updateCollection)
router.delete("/:idCollection",verifySos,deleteCollection)

export default router;