import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class StarService {
  async getAll(query = {}) {
    let star = await dbContext.Star.find(query);
    return star;
  }
  async getOne(id) {
    let star = await dbContext.Star.findById(id);
    if (!star) { throw new BadRequest("Invalid Id"); }
    return star;
  }

  async create(body) {
    return await dbContext.Star.create(body)
  }

  async edit(id, body) {
    let ifIDExists = await dbContext.Star.findById(id)
    // @ts-ignore
    if (!ifIDExists) {
      throw new BadRequest("This does not exist or you are not the owner");
    }
    // return await dbContext.COLLECTIONNAME.findByIdAndUpdate(id, body)
    return await dbContext.Star.findByIdAndUpdate(id, body)
  }

  	async delete(id, body) {
      let ifIDExists = await dbContext.Star.findById(id)
      // @ts-ignore
      if(!ifIDExists){ throw new BadRequest("This does not exist or you are not the owner"); }
      await dbContext.Star.findByIdAndDelete(id)
      return "Succesfully Deleted"
    }

}

export const starService = new StarService();

