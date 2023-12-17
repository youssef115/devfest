import express from 'express';
import { getAllUser, getSingleUser } from '../controllers/userController.js';
import { verifyAdmin } from "./utils/verifyToken.js";

const router = express.Router();

router.get('/', verifyAdmin, getAllUser);

router.get('/:id', getSingleUser);

export default router;