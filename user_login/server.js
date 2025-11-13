import express from "express";
import dotenv from "dotenv";
import userRoutes from "./infrastructure/routes/userRoutes.js";
import { connectDB } from "./src/config/db.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use("/api/users", userRoutes);

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
