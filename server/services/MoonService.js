import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class MoonService {
  async getAll(query = {}) {
    let moon = await dbContext.Moon.find(query);
    return moon;
  }
  async getOne(id) {
    let moon = await dbContext.Moon.findById(id);
    if (!moon) { throw new BadRequest("Invalid Id"); }
    return moon;
  }

  async create(body) {
    return await dbContext.Moon.create(body)
  }

  async edit(id, body) {
    let ifIDExists = await dbContext.Moon.findById(id)
    // @ts-ignore
    if (!ifIDExists) {
      throw new BadRequest("This does not exist or you are not the owner");
    }
    // return await dbContext.COLLECTIONNAME.findByIdAndUpdate(id, body)
    return await dbContext.Moon.findByIdAndUpdate(id, body)
  }

  	async delete(id, body) {
      let ifIDExists = await dbContext.Moon.findById(id)
      // @ts-ignore
      if(!ifIDExists){ throw new BadRequest("This does not exist or you are not the owner"); }
      await dbContext.Moon.findByIdAndDelete(id)
      return "Succesfully Deleted"
    }

}

export const moonService = new MoonService();

