import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const MainLayout: React.FC = () => {
  return (
    <div className="grid grid-cols-16 ">
      <Navbar />
      <Sidebar />
      <div className="border-2 col-span-14">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
