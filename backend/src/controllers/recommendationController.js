import {
  findCoursesBySkill,
} from "../services/mockIgot/mockIgotService.js";

export function getRecommendations(req, res) {
  const { skill } = req.query;

  if (!skill) {
    return res.status(400).json({
      success: false,
      message: "Skill query parameter is required",
      data: null,
    });
  }

  const courses = findCoursesBySkill(skill);

  return res.status(200).json({
    success: true,
    message: "Recommendations fetched",
    data: courses,
  });
}