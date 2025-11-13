import express from "express";
import axios from "axios";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Middleware de verificación JWT
const verificarToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return res.status(403).json({ message: "Token requerido" });
  }

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.usuario = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Token inválido o expirado" });
  }
};

// Rutas públicas 
app.post("/auth/register", async (req, res) => {
  try {
    const response = await axios.post(
      `${process.env.USERS_SERVICE}/api/users/register`,
      req.body
    );
    res.json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json(
      error.response?.data || {
        message: "Error al registrar usuario desde Gateway",
      }
    );
  }
});

app.post("/auth/login", async (req, res) => {
  try {
    const response = await axios.post(
      `${process.env.USERS_SERVICE}/api/users/login`,
      req.body
    );
    res.json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json(
      error.response?.data || {
        message: "Error al iniciar sesión desde Gateway",
      }
    );
  }
});

// 📦 Productos 
app.use("/productos", verificarToken, async (req, res) => {
  try {
    // El microservicio de productos tiene el prefijo /api/productos
    const destino = `${process.env.PRODUCTS_SERVICE}/api/productos${req.path}`;
    console.log(`Reenviando a: ${destino}`);

    const response = await axios({
      method: req.method,
      url: destino,
      data: req.body,
      headers: { Authorization: req.headers["authorization"] },
    });

    res.status(response.status).json(response.data);
  } catch (error) {
    console.error("Error en Gateway productos:", error.message);
    res
      .status(error.response?.status || 500)
      .json(error.response?.data || { message: "Error en gateway productos" });
  }
});

// Ruta base
app.get("/", (req, res) => {
  res.send("API Gateway activo en puerto 5300");
});

// Servidor
app.listen(process.env.PORT, () => {
  console.log(`API Gateway corriendo en http://localhost:${process.env.PORT}`);
});
