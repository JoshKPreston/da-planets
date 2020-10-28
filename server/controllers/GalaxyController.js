import express from "express";
import BaseController from "../utils/BaseController";
import { galaxyService } from "../services/GalaxyService";

export class GalaxysController extends BaseController {
  constructor() {
    super("api/galaxies");
    this.router
      .get("", this.getAll)
      .post("", this.create);
  }
  async getAll(req, res, next) {
    try {
      return await res.send();
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
        return res.send(await someService.edit(req.params.id, req.body))
      } catch (error) { next(error) }
  }

  	async delete(req, res, next) {
      try {
        let variableName = req.params.variableName
        return res.send(await someService.delete(req.params.id, variableName))
      } catch (error) { next(error) }
  }

}
