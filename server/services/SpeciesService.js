import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class SpeciesService {
  async getAll(query = {}) {
    let species = await dbContext.Species.find(query);
    return species;
  }
  async getOne(id) {
    let species = await dbContext.Species.findById(id);
    if (!species) { throw new BadRequest("Invalid Id"); }
    return species;
  }

  async create(body) {
    return await dbContext.Species.create(body)
  }

  async edit(id, body) {
    let ifIDExists = await dbContext.Species.findById(id)
    // @ts-ignore
    if (!ifIDExists) {
      throw new BadRequest("This does not exist or you are not the owner");
    }
    // return await dbContext.COLLECTIONNAME.findByIdAndUpdate(id, body)
    return await dbContext.Species.findByIdAndUpdate(id, body)
  }

  	async delete(id, body) {
      let ifIDExists = await dbContext.Species.findById(id)
      // @ts-ignore
      if(!ifIDExists){ throw new BadRequest("This does not exist or you are not the owner"); }
      await dbContext.Species.findByIdAndDelete(id)
      return "Succesfully Deleted"
    }

}

export const speciesService = new SpeciesService();

