import dotenv from "dotenv";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { connectDB } from "../config/db.js";
import User from "../models/User.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function seedDemoUsers() {
  try {
    await connectDB();

    const dataPath = path.resolve(
      __dirname,
      "../../../data/demo-users.json"
    );

    const file = await fs.readFile(dataPath, "utf8");

    const demoUsers = JSON.parse(file);

    for (const demoUser of demoUsers) {
      const passwordHash = await bcrypt.hash(demoUser.password, 10);

      await User.findOneAndUpdate(
        {
          email: demoUser.email,
        },
        {
          name: demoUser.name,
          email: demoUser.email,
          passwordHash,
          role: demoUser.role,
          department: demoUser.department,
          jobRole: demoUser.jobRole,
          experience: demoUser.experience,
          learningProgress: demoUser.learningProgress,
          skills: demoUser.skills,
        },
        {
          upsert: true,
          new: true,
        }
      );

      console.log(`Seeded: ${demoUser.email}`);
    }

    console.log("Demo users seeded successfully");
  } catch (error) {
    console.error("Seed failed:");
    console.error(error);
  } finally {
    await mongoose.connection.close();
  }
}

seedDemoUsers();