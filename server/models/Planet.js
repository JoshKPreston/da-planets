import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId

const Planet = new Schema(
  {
    title: { type: String, required: true },
    star: { type: ObjectId, ref: "Star" },
    moon: { type: ObjectId, ref: "Moon" },
    species: { type: ObjectId, ref: "Species" }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Planet;
