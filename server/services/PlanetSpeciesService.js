import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class PlanetSpeciesService {
  async getAll(query = {}) {
    let planetSpecies = await dbContext.PlanetSpecies.find(query)
      .populate('star')
      .populate('moon')
      .populate('species')
    return planetSpecies;
  }
  async getOne(id) {
    let planetSpecies = await dbContext.PlanetSpecies.findById(id)
      .populate('star')
      .populate('moon')
      .populate('species')
    if (!planetSpecies) { throw new BadRequest("Invalid Id"); }
    return planetSpecies;
  }

  async create(body) {
    return await dbContext.PlanetSpecies.create(body)
  }

  async edit(id, body) {
    let ifIDExists = await dbContext.PlanetSpecies.findById(id)
    // @ts-ignore
    if (!ifIDExists) {
      throw new BadRequest("This does not exist or you are not the owner");
    }
    return await dbContext.PlanetSpecies.findByIdAndUpdate(id, body)
  }

  async delete(id, body) {
    let ifIDExists = await dbContext.PlanetSpecies.findById(id)
    // @ts-ignore
    if (!ifIDExists) { throw new BadRequest("This does not exist or you are not the owner"); }
    await dbContext.PlanetSpecies.findByIdAndDelete(id)
    return "Succesfully Deleted"
  }

}

export const planetSpeciesService = new PlanetSpeciesService();

