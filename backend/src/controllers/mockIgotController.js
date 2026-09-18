import {
  getAllCourses,
} from "../services/mockIgot/mockIgotService.js";

export function listCourses(req, res) {
  return res.status(200).json({
    success: true,
    message: "Simulated iGOT course catalogue fetched",
    data: getAllCourses(),
  });
}