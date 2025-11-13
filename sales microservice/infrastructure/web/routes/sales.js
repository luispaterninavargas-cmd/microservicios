import express from "express";
import salesController from "./controllers/salesController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

// 🔐 Rutas protegidas 
router.post("/", authMiddleware, salesController.create);
router.put("/:id", authMiddleware, salesController.update);
router.delete("/:id", authMiddleware, salesController.delete);

// Rutas públicas 
router.get("/", salesController.getAll);
router.get("/:id", salesController.getOnline);

export default router;
