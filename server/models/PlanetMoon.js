import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId

const PlanetMoon = new Schema(
  {
    planet: { type: ObjectId, ref: "planet" },
    moon: { type: ObjectId, ref: "moon" }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default PlanetMoon;
