import User from "../models/User.js";
import {
  calculateSkillGaps,
} from "../services/competency/competencyService.js";

export async function getSkillGaps(req, res) {
  try {
    const user = await User.findById(req.user.userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
        data: null,
      });
    }

    const gaps = await calculateSkillGaps(user);

    return res.status(200).json({
      success: true,
      message: "Skill gaps calculated",
      data: gaps,
    });
  } catch (error) {
    console.error("Gap calculation error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to calculate skill gaps",
      data: null,
    });
  }
}
