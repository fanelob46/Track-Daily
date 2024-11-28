
import { MdDashboardCustomize } from "react-icons/md";
import Logout from "./Logout";
import { TbUsersGroup } from "react-icons/tb";

const AdminSideBar = () => {
  return (
    <div>
      <main className="col-span-2">
        <div className="space-y-[2px]">
          <div className="space-y-5 p-7 h-[70vh] bg-[var(--primary-color)]  text-lg mt-[2px]">
            <a
              href="/dashboard"
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
      </main>
    </div>
  );
}

export default AdminSideBar