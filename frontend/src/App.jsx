import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import EmployeeDashboardPage from "./pages/EmployeeDashboardPage";
import SkillGapPage from "./pages/SkillGapPage";
import CoursesPage from "./pages/CoursesPage";
import QuizGeneratorPage from "./pages/QuizGeneratorPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route
          path="/employee/dashboard"
          element={<EmployeeDashboardPage />}
        />

        <Route
          path="/employee/gaps/:skill"
          element={<SkillGapPage />}
        />

        <Route
          path="/employee/courses"
          element={<CoursesPage />}
        />

        <Route
          path="/employee/quiz/generate"
          element={<QuizGeneratorPage />}
        />

        <Route
          path="/"
          element={<Navigate to="/login" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
