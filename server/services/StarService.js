import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class starService {
  async find(query={}) {
    let star = await dbContext.Star.find(query);
    return star;
  }
  async findById(id) {
    let star = await dbContext.Star.findById(id);
    if (!star) {
      throw new BadRequest("Invalid Id");
    }
    return star;
  }
}

export const starService = new starService();