import studentModel from "../models/student.model.js";


   ADD STUDENT

export const addStudent = async (req, res) => {
  try {
    const { name, email, mobile } = req.body;

    // Validation
    if (!name || !email || !mobile) {
      return res.status(400).json({
        success: false,
        message: "All fields are required!"
      });
    }

    // Check duplicate email
    const existingStudent = await studentModel.findOne({ email });

    if (existingStudent) {
      return res.status(400).json({
        success: false,
        message: "Email already exists!"
      });
    }

    // Create student
    const student = await studentModel.create({
      name,
      email,
      mobile
    });

    return res.status(201).json({
      success: true,
      message: "Student added successfully",
      data: student
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to add student",
      error: error.message
    });
  }
};


   GET ALL STUDENTS

export const getAllStudent = async (req, res) => {
  try {
    const students = await studentModel.find().sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      total: students.length,
      data: students
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Cannot fetch students",
      error: error.message
    });
  }
};


   DELETE STUDENT

export const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;

    const student = await studentModel.findByIdAndDelete(id);

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found"
      });
    }

    return res.status(200).json({
      success: true,
      message: "Student deleted successfully",
      deletedId: id
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Cannot delete student",
      error: error.message
    });
  }
};
