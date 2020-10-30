import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class StarPlanetService {
  async getAll(query = {}) {
    let starPlanet = await dbContext.StarPlanet.find(query)
      .populate('galaxy')
      .populate('planet')
    return starPlanet;
  }
  async getOne(id) {
    let starPlanet = await dbContext.StarPlanet.findById(id)
      .populate('galaxy')
      .populate('planet')
    if (!starPlanet) { throw new BadRequest("Invalid Id"); }
    return starPlanet;
  }

  async create(body) {
    return await dbContext.StarPlanet.create(body)
  }

  async edit(id, body) {
    let ifIDExists = await dbContext.StarPlanet.findById(id)
    // @ts-ignore
    if (!ifIDExists) {
      throw new BadRequest("This does not exist or you are not the owner");
    }
    return await dbContext.StarPlanet.findByIdAndUpdate(id, body)
  }

  async delete(id, body) {
    let ifIDExists = await dbContext.StarPlanet.findById(id)
    // @ts-ignore
    if (!ifIDExists) { throw new BadRequest("This does not exist or you are not the owner"); }
    await dbContext.StarPlanet.findByIdAndDelete(id)
    return "Succesfully Deleted"
  }

}

export const starPlanetService = new StarPlanetService();

