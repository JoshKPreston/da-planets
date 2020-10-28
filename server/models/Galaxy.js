import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId

const Galaxy = new Schema(
  {
    title: { type: String, required: true },
    star: { type: ObjectId, ref: "Star" }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Galaxy;
