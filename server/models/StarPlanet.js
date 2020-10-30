import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId

const StarPlanet = new Schema(
  {
    star: { type: ObjectId, ref: "star" },
    planet: { type: ObjectId, ref: "planet" }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default StarPlanet;
