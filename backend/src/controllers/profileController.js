import User from "../models/User.js";

export async function getProfile(req, res) {
  try {
    const user = await User.findById(req.user.userId).select(
      "-passwordHash"
    );

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
        data: null,
      });
    }

    return res.status(200).json({
      success: true,
      message: "Profile fetched",
      data: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        department: user.department,
        jobRole: user.jobRole,
        experience: user.experience,
        learningProgress: user.learningProgress,
        skills: user.skills,
      },
    });
  } catch (error) {
    console.error("Profile error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to fetch profile",
      data: null,
    });
  }
}