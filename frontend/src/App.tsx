import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import { LandingPage } from "./pages/LandingPage";
import { LoginPage } from "./pages/LoginPage";
import { UserDashboard } from "./pages/UserDashboard";
import { TasksPage } from "./pages/TasksPage";
import { CalendarPage } from "./pages/CalendarPage";
import { TrashPage } from "./pages/TrashPage";
import { UserProfile } from "./pages/UserProfile";
import { AdminDashboard } from "./pages/AdminDashboard";

import AddTask from './components/AddTask';
import { PrivateRoute } from "./components/PrivateRoute";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />

        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Protected Routes */}
        <Route path="" element={<PrivateRoute />}>
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/trash" element={<TrashPage />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path='/add-task' element={<AddTask/>} />
          </Route>
        <Route path="/" element={<MainLayout />}>
          {/* Protected Routes */}
          <Route path="" element={<PrivateRoute />}>
            <Route path="/dashboard" element={<UserDashboard />} />
            <Route path="/tasks" element={<TasksPage />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/trash" element={<TrashPage />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
