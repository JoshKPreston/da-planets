import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId

const GalaxyStar = new Schema(
  {
    galaxy: { type: ObjectId, ref: "galaxy" },
    star: { type: ObjectId, ref: "star" }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default GalaxyStar;
