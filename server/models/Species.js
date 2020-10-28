import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId

const Species = new Schema(
  {
    title: { type: String, required: true },
    planet: { type: ObjectId, ref: "Planet" }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Species;
