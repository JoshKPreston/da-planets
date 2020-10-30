import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class PlanetMoonService {
  async getAll(query = {}) {
    let planetMoon = await dbContext.PlanetMoon.find(query)
      .populate('star')
      .populate('moon')
      .populate('species')
    return planetMoon;
  }
  async getOne(id) {
    let planetMoon = await dbContext.PlanetMoon.findById(id)
      .populate('star')
      .populate('moon')
      .populate('species')
    if (!planetMoon) { throw new BadRequest("Invalid Id"); }
    return planetMoon;
  }

  async create(body) {
    return await dbContext.PlanetMoon.create(body)
  }

  async edit(id, body) {
    let ifIDExists = await dbContext.PlanetMoon.findById(id)
    // @ts-ignore
    if (!ifIDExists) {
      throw new BadRequest("This does not exist or you are not the owner");
    }
    return await dbContext.PlanetMoon.findByIdAndUpdate(id, body)
  }

  async delete(id, body) {
    let ifIDExists = await dbContext.PlanetMoon.findById(id)
    // @ts-ignore
    if (!ifIDExists) { throw new BadRequest("This does not exist or you are not the owner"); }
    await dbContext.PlanetMoon.findByIdAndDelete(id)
    return "Succesfully Deleted"
  }

}

export const planetMoonService = new PlanetMoonService();

