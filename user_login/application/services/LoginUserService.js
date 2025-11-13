import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export class LoginUserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute({ email, password }) {
    const user = await this.userRepository.findByEmail(email);
    if (!user) throw new Error("Usuario no encontrado");

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) throw new Error("Contraseña incorrecta");

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return { token, user };
  }
}
