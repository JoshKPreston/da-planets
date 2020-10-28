import BaseController from "../utils/BaseController";
import { starService } from "../services/StarService";

export class StarController extends BaseController {
  constructor() {
    super("api/star")
    this.router
      .get("", this.getAll)
      .get("/:id", this.getOne)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
  }
  async getAll(req, res, next) {
    try {
      return res.send(await req.body)
    } catch (error) { next(error) }
  }

  async getOne(req, res, next) {
    try {
      res.send(await starService.getOne(req.params.id));
    } catch (error) { next(error) }
  }

  async create(req, res, next) {
    try {
      return res.send(await req.body)
    } catch (error) { next(error) }
  }

  async edit(req, res, next) {
    try {
      let variableName = req.params.variableName
      req.body.user = variableName
      return res.send(await starService.edit(req.params.id, req.body))
    } catch (error) { next(error) }
  }

  async delete(req, res, next) {
    try {
      let variableName = req.params.variableName
      return res.send(await starService.delete(req.params.id, variableName))
    } catch (error) { next(error) }
  }

}
