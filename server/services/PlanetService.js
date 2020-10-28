import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class PlanetService {
  async getAll(query = {}) {
    let planet = await dbContext.Planet.find(query);
    return planet;
  }
  async getOne(id) {
    let planet = await dbContext.Planet.findById(id);
    if (!planet) { throw new BadRequest("Invalid Id"); }
    return planet;
  }

  async create(body) {
    return await dbContext.Planet.create(body)
  }

  async edit(id, body) {
    let ifIDExists = await dbContext.Planet.findById(id)
    // @ts-ignore
    if (!ifIDExists) {
      throw new BadRequest("This does not exist or you are not the owner");
    }
    // return await dbContext.COLLECTIONNAME.findByIdAndUpdate(id, body)
    return await dbContext.Planet.findByIdAndUpdate(id, body)
  }

  	async delete(id, body) {
      let ifIDExists = await dbContext.Planet.findById(id)
      // @ts-ignore
      if(!ifIDExists){ throw new BadRequest("This does not exist or you are not the owner"); }
      await dbContext.Planet.findByIdAndDelete(id)
      return "Succesfully Deleted"
    }

}

export const planetService = new PlanetService();

