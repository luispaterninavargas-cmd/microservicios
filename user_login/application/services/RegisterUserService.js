import bcrypt from "bcrypt";

export class RegisterUserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute({ nombre, email, password }) {
    const existing = await this.userRepository.findByEmail(email);
    if (existing) throw new Error("El usuario ya existe");

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = {
      nombre,
      email,
      password: hashedPassword,
      fechaRegistro: new Date(),
    };

    return await this.userRepository.create(user);
  }
}
