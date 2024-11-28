import { MdDashboardCustomize } from "react-icons/md";
import Logout from "./Logout";

const AdminSideBar = () => {
  return (
    <div className="col-span-2 space-y-[2px] border-2">
      <div className="space-y-5 p-7 h-[80vh] bg-[var(--primary-color)]  text-lg mt-[2px]">
        <a
          href="/admin"
          className="hover:font-semibold flex items-center gap-5"
        >
          <MdDashboardCustomize className="text-[var(--accent)] size-6" />
          <p>Users</p>
        </a>
      </div>
      <div className="space-y-5 p-7 bg-[var(--primary-color)]  text-lg py-4">
        <Logout />
      </div>
    </div>
  );
};

export default AdminSideBar;
