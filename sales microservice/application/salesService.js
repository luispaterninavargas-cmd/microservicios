import salesRepository from "../infrastructure/models/salesRepository.js";

class SalesService {
  async create(data) {
    return await salesRepository.create(data);
  }

  async getAll() {
    return await salesRepository.getAll();
  }

  async getOne(id) {
    return await salesRepository.getOne(id);
  }

  async update(id, data) {
    return await salesRepository.update(id, data);
  }

  async delete(id) {
    return await salesRepository.delete(id);
  }
}

export default new SalesService();
