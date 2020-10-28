
import mongoose from "mongoose";
import GalaxySchema from "../models/Galaxy";
import StarSchema from "../models/Star";
import PlanetSchema from "../models/Planet";
import MoonSchema from "../models/Moon";
import SpeciesSchema from "../models/Species";

class DbContext {
  Galaxy = mongoose.model("Galaxy", GalaxySchema);
  Star = mongoose.model("Star", StarSchema);
  Planet = mongoose.model("Planet", PlanetSchema);
  Moon = mongoose.model("Moon", MoonSchema);
  Species = mongoose.model("Species", SpeciesSchema);

}

export const dbContext = new DbContext();


