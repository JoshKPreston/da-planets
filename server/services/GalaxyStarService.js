import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class GalaxyStarService {
  async getAll(query = {}) {
    return await dbContext.GalaxyStar.find(query)
    .populate('galaxy')
    .populate('star')
  }

  async getOne(id) {
    let galaxyStar = await dbContext.GalaxyStar.findById(id)
    .populate('galaxy')
    .populate('star')
    if (!galaxyStar) { throw new BadRequest("Invalid Id") }
    return galaxyStar;
  }

  async create(body) {
    return await dbContext.GalaxyStar.create(body)
  }

  async edit(id, body) {
    let ifIDExists = await dbContext.GalaxyStar.findById(id)
    // @ts-ignore
    if (!ifIDExists) {
      throw new BadRequest("This does not exist or you are not the owner");
    }
    return await dbContext.GalaxyStar.findByIdAndUpdate(id, body)
  }

  async delete(id, body) {
    let ifIDExists = await dbContext.GalaxyStar.findById(id)
    // @ts-ignore
    if (!ifIDExists) { throw new BadRequest("This does not exist or you are not the owner"); }
    await dbContext.GalaxyStar.findByIdAndDelete(id)
    return "Succesfully Deleted"
  }

}

export const galaxyStarService = new GalaxyStarService();

