import { Outlet } from "react-router-dom";
import AdminSideBar from "../components/AdminSideBar";
import Navbar from "../components/Navbar";

const AdminLayout = () => {
  return (
    <div className="grid grid-cols-16 h-screen">
      <Navbar />
      <AdminSideBar />
      <div
        className=" col-span-14 p-10 h-[90vh] 
      "
      >
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
