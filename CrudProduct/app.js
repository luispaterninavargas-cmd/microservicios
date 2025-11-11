import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import "./infrastructure/config/dbClient.js";
import productRoutes from "./infrastructure/web/routes/productos.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5101;

app.use(cors());
app.use(express.json());

// Prefijo para tus rutas
app.use("/api/productos", productRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
