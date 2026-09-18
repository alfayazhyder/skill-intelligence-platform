import { courseCatalog } from "./courseCatalog.js";

export function getAllCourses() {
  return courseCatalog;
}

export function findCoursesBySkill(skill) {
  if (!skill || typeof skill !== "string") {
    return [];
  }

  const normalizedSkill = skill.trim().toLowerCase();

  return courseCatalog.filter((course) =>
    course.skills.some(
      (courseSkill) =>
        courseSkill.toLowerCase() === normalizedSkill
    )
  );
}