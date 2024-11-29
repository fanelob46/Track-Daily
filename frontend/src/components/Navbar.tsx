import { CiSearch } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { CiSettings, CiBellOn } from "react-icons/ci";

export default function Navbar() {
  const { userInfo } = useSelector((state: RootState) => state.auth);
  return (
    <nav className="flex justify-between m-2 p-4 bg-[var(--primary-color)] items-center col-span-full rounded-full shadow-lg">
      <div className="flex items-center gap-2 font-semibold pl-2">
        <img src="/TrackDailyLogo.svg" className="w-7" />
        <p>Track Daily</p>
      </div>
      <div className="flex items-center h-12 text-lg space-x-2 bg-[var(--secondary-color)] w-[30%] p-4 rounded-2xl shadow-lg">
        <CiSearch className="size-6" />
        <input
          placeholder="search"
          className="border-none h-full w-full bg-[var(--secondary-color)]"
        ></input>
      </div>
      <div className="flex items-center space-x-4">
      <div className="flex items-center space-x-4">
      <CiSettings className="border p-2 size-11 shadow-lg rounded-full" />
      <CiBellOn className="border p-2 size-11 shadow-lg rounded-full"/>
      </div>
      <div className="border p-2 rounded-lg w-auto h-[6vh] shadow-lg">
      {userInfo ? (
        <>
          {userInfo?.isAdmin ? (
            <Link
              to="/admin/profile"
              className="flex w-[100px] justify-between items-center"
            >
              <FaRegUserCircle className="size-7 text-[var(--accent)]" />
              <div className="bg-gray-200 p-2 rounded-lg">
                <p>{userInfo.firstName}</p>
              </div>
            </Link>
          ) : (
            <Link
              to="/admin/profile"
              className="flex w-[100px] justify-between items-center"
            >
              <FaRegUserCircle className="size-7 text-[var(--accent)]" />
              <div className="bg-gray-200 p-2 rounded-lg">
                <p>{userInfo.firstName}</p>
              </div>
            </Link>
          )}
        </>
      ) : (
        <div className="flex gap-4 items-center">
          <Link to="/login">Register</Link>
          <Link to="/signup">Login</Link>
        </div>
      )}
        </div>
      </div>
    </nav>
  );
}
