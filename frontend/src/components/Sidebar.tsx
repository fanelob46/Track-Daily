import {
  MdDashboardCustomize,
  MdOutlineAddTask,
  MdCalendarMonth,
} from "react-icons/md";
import Logout from "./Logout";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Sidebar() {
  return (
    <div className="col-span-2 h-full flex flex-col justify-between">
      <div className="space-y-10 p-7 bg-[var(--primary-color)] h-full  text-lg mt-[2px] shadow-lg rounded-[30px] m-2">
        <a
          href="/dashboard"
          className="hover:font-semibold flex items-center gap-5"
        >
          <MdDashboardCustomize className="text-[var(--accent)] size-6" />
          <p>Dashboard</p>
        </a>
        <Link
          to={"dashboard/tasks"}
          className="hover:font-semibold flex items-center gap-5"
        >
          <MdOutlineAddTask className="text-orange-500 size-6" />
          <p>Tasks</p>
        </Link>
        <a
          href="/calendar"
          className="hover:font-semibold flex items-center gap-5"
        >
          <MdCalendarMonth className="text-green-500 font-bold size-6" />
          <p>Calendar</p>
        </a>
      </div>
      <div className="space-y-5 p-7 bg-[var(--primary-color)]  text-lg py-4 shadow-lg rounded-[30px] m-2">
        {/* <a href="#" className="hover:font-semibold flex items-center gap-5">
          <IoSettingsOutline />
          <p>Settings</p>
        </a> */}
        <Logout />
        <ThemeToggle/>
      </div>
    </div>
  );
}
