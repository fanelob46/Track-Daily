import {
  MdDashboardCustomize,
  MdOutlineAddTask,
  MdCalendarMonth,
  MdLightMode,
} from "react-icons/md";
import { IoSettingsOutline, IoTrashBin } from "react-icons/io5";
import { IoIosLogOut, IoMdSettings } from "react-icons/io";
import { FaRegMoon } from "react-icons/fa";
import Logout from "./Logout";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <main className="col-span-2">
      <div className="space-y-[2px]">
        <div className="space-y-5 p-7 h-[70vh] bg-[var(--primary-color)]  text-lg mt-[2px]">
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
          <div>
            <a
              href="/trash"
              className="hover:font-semibold flex items-center gap-5"
            >
              <IoTrashBin className="text-gray-500 font-bold size-6" />
              <p>Trash</p>
            </a>
           
          </div>
        </div>
        <div className="space-y-5 p-7 bg-[var(--primary-color)]  text-lg py-4">
          
          <a href="#" className="hover:font-semibold flex items-center gap-5">
            <IoSettingsOutline />
            <p>Settings</p>
          </a>
          <Logout />
          
        </div>
        <div className="bg-[var(--primary-color)] p-5">
          <div className="flex items-center bg-[var(--secondary-color)] p-4 justify-between w-[50%]">
            <button>
              <MdLightMode />
            </button>
            <button>
              <FaRegMoon />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
