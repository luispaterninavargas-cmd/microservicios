import express from "express";
import productController from "../controllers/productController.js";
import authMiddleware from "../middlewares/authMiddleware.js"; 

const router = express.Router();

//Rutas protegidas 
router.post('/', authMiddleware, productController.crearProducto);
router.put('/:id', authMiddleware, productController.actualizarProducto);
router.delete('/:id', authMiddleware, productController.eliminarProducto);

// 🌍 Rutas públicas 
router.get('/', productController.getAll);
router.get('/:id', productController.getOne);

export default router;