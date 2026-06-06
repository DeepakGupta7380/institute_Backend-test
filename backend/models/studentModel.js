import mongoose, { Schema } from "mongoose";

const studentSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
      lowercase: true
    },

    mobile: {
      type: String,
      required: [true, "Mobile number is required"],
      trim: true
    }
  },
  {
    timestamps: true
  }
);

const studentModel = mongoose.model("Student", studentSchema);

export default studentModel;