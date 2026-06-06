import mongoose, { Schema } from "mongoose";

const enrollSchema = new Schema(
  {
    studentId: {
      type: Schema.Types.ObjectId,
      ref: "Student",
      required: [true, "Student is required"]
    },

    courseId: {
      type: Schema.Types.ObjectId,
      ref: "Course",
      required: [true, "Course is required"]
    },

    enrollmentDate: {
      type: Date,
      default: Date.now
    },

    status: {
      type: String,
      enum: ["Active", "Completed"],
      default: "Active"
    }
  },
  {
    timestamps: true
  }
);

const enrollModel = mongoose.model("Enrollment", enrollSchema);

export default enrollModel;