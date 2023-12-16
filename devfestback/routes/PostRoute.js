import express  from "express";
import { addPost,getPosts,updatePost,deletePost,getPostbyid } from "../controllers/PostController"
const router = express.Router();

router.get("/getpost/:id",getPostbyid)
router.get("/all",getPosts)
router.post("/addpost",addPost)
router.put("/updatepost/:id",updatePost)
router.delete("/deletepost/:id",deletePost)

export default router;