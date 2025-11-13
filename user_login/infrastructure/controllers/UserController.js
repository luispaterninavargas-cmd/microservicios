import { MongoUserRepository } from "../database/MongoUserRepository.js";
import { RegisterUserService } from "../../application/services/RegisterUserService.js";
import { LoginUserService } from "../../application/services/LoginUserService.js";
import { GetUserByIdService } from "../../application/services/GetUserByIdService.js";

const userRepository = new MongoUserRepository();

export const registerUser = async (req, res) => {
  try {
    const service = new RegisterUserService(userRepository);
    const user = await service.execute(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const service = new LoginUserService(userRepository);
    const result = await service.execute(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const service = new GetUserByIdService(userRepository);
    const user = await service.execute(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
