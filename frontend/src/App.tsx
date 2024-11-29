import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import { LandingPage } from "./pages/LandingPage";
import { LoginPage } from "./pages/LoginPage";
import { UserDashboard } from "./pages/UserDashboard";
import { TasksPage } from "./pages/TasksPage";
import { CalendarPage } from "./pages/CalendarPage";
import { UserProfile } from "./pages/UserProfile";
import { AdminDashboard } from "./pages/AdminDashboard";
import AddTask from "./components/AddTask";
import { PrivateRoute } from "./components/PrivateRoute";
import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";
// import { useState, useEffect } from "react";

function App() {
  // const [theme, setTheme] = useState("light");

  // useEffect(() => {
  //   if (theme === "dark"){
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  // }, [theme]);

  return (
    <div className="bg-gray-100 dark:bg-[#434452] dark:text-white font-title">
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />

          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />

          <Route path="/" element={<MainLayout />}>
            {/* Protected Routes */}
            <Route path="" element={<PrivateRoute />}>
              <Route path="/dashboard" element={<UserDashboard />} />
              <Route path="/dashboard/tasks" element={<TasksPage />} />
              <Route path="/calendar" element={<CalendarPage />} />
              <Route path="/profile" element={<UserProfile />} />

              <Route path="/add-task" element={<AddTask />} />
            </Route>
          </Route>

          <Route path="/" element={<PrivateRoute />}>
            <Route path="" element={<AdminLayout />}>
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/admin/profile" element={<UserProfile />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
