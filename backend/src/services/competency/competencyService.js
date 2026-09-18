import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const frameworkPath = path.resolve(
  __dirname,
  "../../../../data/competency-framework.json"
);

async function loadFrameworks() {
  const raw = await fs.readFile(frameworkPath, "utf8");
  return JSON.parse(raw);
}

export async function getFrameworkForRole(role) {
  const frameworks = await loadFrameworks();

  return (
    frameworks.find(
      (framework) =>
        framework.role.toLowerCase() === role.toLowerCase()
    ) || null
  );
}

export async function calculateSkillGaps(user) {
  const framework = await getFrameworkForRole(user.jobRole);

  if (!framework) {
    return [];
  }

  const currentSkills = new Map(
    user.skills.map((skill) => [
      skill.name.toLowerCase(),
      skill.level,
    ])
  );

  return framework.requiredCompetencies
    .map((required) => {
      const currentLevel =
        currentSkills.get(required.name.toLowerCase()) || 0;

      const gap = Math.max(
        0,
        required.requiredLevel - currentLevel
      );

      return {
        skill: required.name,
        currentLevel,
        requiredLevel: required.requiredLevel,
        gap,
        explanation: getGapExplanation(required.name),
      };
    })
    .filter((item) => item.gap > 0)
    .sort((a, b) => b.gap - a.gap);
}

function getGapExplanation(skill) {
  const explanations = {
    "National Accounts":
      "This competency supports understanding and analysis of national accounting concepts and economic aggregates.",

    "Data Visualization":
      "This competency supports clear interpretation and presentation of statistical information.",

    "Survey Methodology":
      "This competency supports the design, execution and interpretation of reliable statistical surveys.",
  };

  return (
    explanations[skill] ||
    "This competency is required for the employee's current role."
  );
}
