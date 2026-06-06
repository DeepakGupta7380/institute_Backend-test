import mongoose, { Schema } from "mongoose";

const courseSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true
    },

    category: {
      type: String,
      required: [true, "Category is required"],
      trim: true
    },

    fees: {
      type: Number,
      required: [true, "Fees is required"],
      min: [0, "Fees cannot be negative"]
    },

    duration: {
      type: String,
      required: [true, "Duration is required"]
    }
  },
  {
    timestamps: true
  }
);

const courseModel = mongoose.model("Course", courseSchema);

export default courseModel;