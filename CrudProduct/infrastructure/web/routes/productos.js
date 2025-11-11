import express from "express";
import productController from "../controllers/productController.js";

const router = express.Router();

router.post('/', productController.crearProducto);
router.get('/', productController.getAll); 
router.get('/:id', productController.getOne);
router.put('/:id', productController.actualizarProducto);
router.delete('/:id', productController.eliminarProducto);

export default router;  