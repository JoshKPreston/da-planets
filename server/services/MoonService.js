import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class MoonService {
  async find(query={}) {
    let moon = await dbContext.Moon.find(query);
    return moon;
  }
  async findById(id) {
    let moon = await dbContext.Moon.findById(id);
    if (!moon) {
      throw new BadRequest("Invalid Id");
    }
    return moon;
  }
}

export const moonService = new MoonService();