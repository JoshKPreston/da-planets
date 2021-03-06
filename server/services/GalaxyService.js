import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class GalaxyService {
  async getAll(query = {}) {
    return await dbContext.Galaxy.find(query)
    .populate('star')
  }

  async getOne(id) {
    let galaxy = await dbContext.Galaxy.findById(id)
      .populate('star')
    if (!galaxy) { throw new BadRequest("Invalid Id") }
    return galaxy;
  }

  async create(body) {
    return await dbContext.Galaxy.create(body)
  }

  async edit(id, body) {
    let ifIDExists = await dbContext.Galaxy.findById(id)
    // @ts-ignore
    if (!ifIDExists) {
      throw new BadRequest("This does not exist or you are not the owner");
    }
    return await dbContext.Galaxy.findByIdAndUpdate(id, body)
  }

  async delete(id, body) {
    let ifIDExists = await dbContext.Galaxy.findById(id)
    // @ts-ignore
    if (!ifIDExists) { throw new BadRequest("This does not exist or you are not the owner"); }
    await dbContext.Galaxy.findByIdAndDelete(id)
    return "Succesfully Deleted"
  }

}

export const galaxyService = new GalaxyService();

