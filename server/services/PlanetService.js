import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class PlanetService {
  async find(query={}) {
    let planet = await dbContext.Planet.find(query);
    return planet;
  }
  async findById(id) {
    let planet = await dbContext.Planet.findById(id);
    if (!planet) {
      throw new BadRequest("Invalid Id");
    }
    return planet;
  }
}

export const PlanetService = new PlanetService();