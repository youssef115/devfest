import express from 'express';

import { addCollection, getAllCollection, getOneCollection, updateCollection,deleteCollection } from '../controllers/CollectionController.js'
const router=express.Router();

router.post("/", addCollection)
router.get("/:idCollection",getOneCollection)
router.get("/",getAllCollection)
router.put("/:idCollection",updateCollection)
router.delete("/:idCollection",deleteCollection)

export default router;