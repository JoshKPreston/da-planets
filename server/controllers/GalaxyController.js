import BaseController from "../utils/BaseController";
import { galaxyService } from "../services/GalaxyService";

export class GalaxyController extends BaseController {
  constructor() {
    super("api/galaxy")
    this.router
      .get("", this.getAll)
      .get("/:id", this.getOne)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
  }
  async getAll(req, res, next) {
    try {
      res.send(await galaxyService.getAll(req.body))
    } catch (error) { next(error) }
  }

  async getOne(req, res, next) {
    try {
      res.send(await galaxyService.getOne(req.params.id))
    } catch (error) { next(error) }
  }

  async create(req, res, next) {
    try {
      res.send(await galaxyService.create(req.body))
    } catch (error) { next(error) }
  }

  async edit(req, res, next) {
    try {
      let galaxy = req.params.galaxy
      req.body.galaxy = galaxy
      res.send(await galaxyService.edit(req.params.id, req.body))
    } catch (error) { next(error) }
  }

  async delete(req, res, next) {
    try {
      let galaxy = req.params.galaxy
      res.send(await galaxyService.delete(req.params.id, galaxy))
    } catch (error) { next(error) }
  }

}
