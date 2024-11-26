import { MdDashboardCustomize, MdOutlineAddTask, MdCalendarMonth, MdLightMode } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { FaRegMoon } from "react-icons/fa";

export default function Sidebar() {

    return (
        <main className="col-span-2">
            <div className="space-y-[2px]">
                <div className="space-y-5 p-7 h-[70vh] bg-[var(--primary-color)]  text-lg mt-[2px]">
                    <a href="#" className="hover:text-[var(--accent)] hover:font-semibold flex items-center gap-5">
                        <MdDashboardCustomize />
                        <p>Dashboard</p>
                    </a>
                    <a href="#" className="hover:text-[var(--accent)] hover:font-semibold flex items-center gap-5">
                        <MdOutlineAddTask />
                        <p>Tasks</p>
                    </a>
                    <a href="#" className="hover:text-[var(--accent)] hover:font-semibold flex items-center gap-5">
                        <MdCalendarMonth />
                        <p>Calendar</p>
                    </a>
                </div>
                <div className="space-y-5 p-7 bg-[var(--primary-color)]  text-lg py-4">
                    <a href="#" className="hover:text-[var(--accent)] hover:font-semibold flex items-center gap-5">
                        <IoSettingsOutline />
                        <p>Settings</p>
                    </a>
                    <a href="#" className="hover:text-[var(--accent)] hover:font-semibold flex items-center gap-5">
                        <IoIosLogOut />
                        <p>Logout</p>
                    </a>
                </div>
                <div className="bg-[var(--primary-color)]  p-6">
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
    )
}