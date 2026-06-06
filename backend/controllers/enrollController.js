import courseModel from "../models/course.model.js";


   ADD COURSE

export const addCourse = async (req, res) => {
  try {
    const { title, category, fees, duration } = req.body;

    // Validation
    if (!title || !category || !fees || !duration) {
      return res.status(400).json({
        success: false,
        message: "All fields are required!"
      });
    }

    const newCourse = await courseModel.create({
      title,
      category,
      fees,
      duration
    });

    return res.status(201).json({
      success: true,
      message: "Course added successfully",
      data: newCourse
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to add course",
      error: error.message
    });
  }
};

/* =========================
   GET ALL COURSES
========================= */
export const getAllCourse = async (req, res) => {
  try {
    const courses = await courseModel.find().sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      total: courses.length,
      data: courses
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch courses",
      error: error.message
    });
  }
};

/* =========================
   DELETE COURSE
========================= */
export const deleteCourse = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedCourse = await courseModel.findByIdAndDelete(id);

    if (!deletedCourse) {
      return res.status(404).json({
        success: false,
        message: "Course not found"
      });
    }

    return res.status(200).json({
      success: true,
      message: "Course deleted successfully",
      deletedId: id
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error deleting course",
      error: error.message
    });
  }
};
