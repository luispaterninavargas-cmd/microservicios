import mongoose from "mongoose";
import { IUserRepository } from "../../domain/repositories/IUserRepository.js";

const userSchema = new mongoose.Schema({
  nombre: String,
  email: { type: String, unique: true },
  password: String,
  fechaRegistro: Date,
});

const UserModel = mongoose.model("User", userSchema);

export class MongoUserRepository extends IUserRepository {
  async create(user) {
    return await UserModel.create(user);
  }

  async findByEmail(email) {
    return await UserModel.findOne({ email });
  }

  async findById(id) {
    return await UserModel.findById(id);
  }
}
