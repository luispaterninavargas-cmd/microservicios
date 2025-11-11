import { ObjectId } from "mongodb";
import dbClient from "../config/dbClient.js";

class ProductRepository {
  async create(product) {
    return await ProductModel.create(product);
  }

  async findAll() {
    return await ProductModel.find();
  }

  async findById(id) {
    return await ProductModel.findById(id);
  }

  async update(id, productData) {
    return await ProductModel.findByIdAndUpdate(id, productData, { new: true });
  }

  async delete(id) {
    return await ProductModel.findByIdAndDelete(id);
  }
}

export default new ProductRepository();
