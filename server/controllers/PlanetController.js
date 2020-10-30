import BaseController from "../utils/BaseController";
import { planetService } from "../services/PlanetService";

export class PlanetController extends BaseController {
  constructor() {
    super("api/planet")
    this.router
      .get("", this.getAll)
      .get("/:id", this.getOne)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
  }
  async getAll(req, res, next) {
    try {
      res.send(await planetService.getAll(req.body))
    } catch (error) { next(error) }
  }

  async getOne(req, res, next) {
    try {
      res.send(await planetService.getOne(req.params.id));
    } catch (error) { next(error) }
  }

  async create(req, res, next) {
    try {
      res.send(await planetService.create(req.body))
    } catch (error) { next(error) }
  }

  async edit(req, res, next) {
    try {
      let variableName = req.params.variableName
      req.body.user = variableName
      res.send(await planetService.edit(req.params.id, req.body))
    } catch (error) { next(error) }
  }

  async delete(req, res, next) {
    try {
      let variableName = req.params.variableName
      res.send(await planetService.delete(req.params.id, variableName))
    } catch (error) { next(error) }
  }

}
