import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId

const Star = new Schema(
  {
    title: { type: String, required: true },
    galaxy: { type: ObjectId, ref: "Galaxy" },
    planet: { type: ObjectId, ref: "Planet" }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Star;
