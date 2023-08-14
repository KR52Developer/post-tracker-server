import express from "express";
const router = express.Router();
import { createUser, getAllUsers, getSingleUser, updateUser, deleteUser } from "../controllers/userController.js";



//create user
router.post("/create", createUser);

// getAll users
router.get("/", getAllUsers);

// getSingle User
router.get("/:id", getSingleUser);

// update User
router.put("/:id", updateUser);

// Delete User
router.delete("/:id", deleteUser);

export default router;