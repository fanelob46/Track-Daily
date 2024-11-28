import { Outlet } from "react-router-dom";
import AdminSideBar from "../components/AdminSideBar";
import Navbar from "../components/Navbar";


const AdminLayout = () => {
  return (
    <div className="grid grid-cols-16 ">
      <Navbar />
      <AdminSideBar />
      <div className="border-2 col-span-14">
        <Outlet />
      </div>
    </div>
  );
}

export default AdminLayout