import productRepository from "../../infrastructure/database/productRepository.js";

class ProductService {
  async crearProducto(data) {
    return await productRepository.crearProducto(data);
  }

  async getAll() {
    return await productRepository.getAll();
  }

  async getOne(id) {
    return await productRepository.getOne(id);
  }

  async update(id, data) {
    return await productRepository.update(id, data);
  }

  async eliminarProducto(id) {
    return await productRepository.eliminarProducto(id);
  }
}

export default new ProductService();
