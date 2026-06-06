import enrollModel from "../models/enrollment.model.js";

export const getTotalEnrollments = async (req, res) => {
  try {
    const result = await enrollModel.aggregate([
      {
        $group: {
          _id: null,
          totalEnrollments: { $sum: 1 }
        }
      },
      {
        $project: {
          _id: 0,
          totalEnrollments: 1
        }
      }
    ]);

    res.status(200).json({
      success: true,
      totalEnrollments: result[0]?.totalEnrollments || 0
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch total enrollments",
      error: error.message
    });
  }
};