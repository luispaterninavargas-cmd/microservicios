import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({ message: "Token requerido" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next(); // continúa a la siguiente función (controlador)
  } catch (error) {
    res.status(401).json({ message: "Token inválido o expirado" });
  }
};

export default authMiddleware;
