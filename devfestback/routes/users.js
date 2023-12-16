import express from 'express';
import { getAllUser, getSingleUser } from '../controllers/userController';

const router = express.Router();

router.get('/', getAllUser);

router.get('/:id', getSingleUser);

export default router;