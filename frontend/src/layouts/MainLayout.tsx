import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const MainLayout: React.FC = () => {
  return (
    <div className="grid grid-cols-16 h-screen">
      <Navbar />
      <Sidebar />
      <div
        className=" col-span-14 p-2 h-[90vh]"
      >
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
