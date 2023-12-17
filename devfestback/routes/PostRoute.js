import express  from "express";
import { addPost,getPosts,updatePost,deletePost,getPostbyid } from "../controllers/PostController.js"
import { verifyAdmin, verifySos, verifyAssociation } from "./utils/verifyToken.js";

const router = express.Router();

router.get("/getpost/:id",getPostbyid)
router.get("/all",getPosts)
router.post("/addpost", verifySos,addPost)
router.put("/updatepost/:id", verifySos ,updatePost)
router.delete("/deletepost/:id", verifySos,deletePost)

export default router;