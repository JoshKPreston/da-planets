import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class SpeciesService {
  async find(query={}) {
    let species = await dbContext.Species.find(query);
    return species;
  }
  async findById(id) {
    let species = await dbContext.Species.findById(id);
    if (!species) {
      throw new BadRequest("Invalid Id");
    }
    return species;
  }
}

export const speciesService = new SpeciesService();