import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class GalaxyService {
  async find(query={}) {
    let galaxy = await dbContext.Galaxy.find(query);
    return galaxy;
  }
  async findById(id) {
    let galaxy = await dbContext.Galaxy.findById(id);
    if (!galaxy) {
      throw new BadRequest("Invalid Id");
    }
    return galaxy;
  }
}

export const galaxyService = new GalaxyService();