import express from "express";
import {
  registerUser,
  loginUser,
  getUserById,
} from "../controllers/UserController.js";
import { verifyToken } from "../security/auth.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/:id", verifyToken, getUserById);

export default router;
