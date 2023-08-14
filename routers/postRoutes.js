import express from "express";
import { createPost, getAllPosts, getSinglePost, updatePost, deletePost } from "../controllers/postController.js";

const router = express.Router();


// create post
router.post("/create", createPost);

// get all post
router.get("/", getAllPosts);

// get single post
router.get("/:id", getSinglePost);

// update post
router.put("/:id", updatePost);

// delete post
router.delete("/:id", deletePost);


export default router;