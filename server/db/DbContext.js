
import mongoose from "mongoose";
import GalaxySchema from "../models/Galaxy";
import StarSchema from "../models/Star";
import PlanetSchema from "../models/Planet";
import MoonSchema from "../models/Moon";
import SpeciesSchema from "../models/Species";

class DbContext {
  Galaxy = mongoose.model("galaxy", GalaxySchema);
  GalaxyStar = mongoose.model("galaxy_star", GalaxySchema);
  Star = mongoose.model("star", StarSchema);
  StarPlanet = mongoose.model("star_planet", StarSchema);
  Planet = mongoose.model("planet", PlanetSchema);
  PlanetMoon = mongoose.model("planet_moon", PlanetSchema);
  PlanetSpecies = mongoose.model("planet_species", PlanetSchema);
  Moon = mongoose.model("moon", MoonSchema);
  Species = mongoose.model("species", SpeciesSchema);

}

export const dbContext = new DbContext();



