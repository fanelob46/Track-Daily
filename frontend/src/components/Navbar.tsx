import { CiSearch } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { CiSettings, CiBellOn } from "react-icons/ci";
import { useTaskStore } from "../../store/Task";

export default function Navbar() {
  const { userInfo } = useSelector((state: RootState) => state.auth);
  const { setSearchQuery } = useTaskStore();

const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setSearchQuery(e.target.value);
};

  return (
    <nav className="flex justify-between p-4 bg-[var(--primary-color)] items-center col-span-full h-20">
      {userInfo?.isAdmin ? (
        <Link
          to="/admin"
          className="h-full hover:scale-[1.02] flex items-center space-x-2"
        >
          <img src="TrackDailyLogo.svg" alt="" className="h-full scale-[0.7]" />
          <h2 className="text-2xl">Track Daily </h2>
        </Link>
      ) : (
        <Link
          to="/dashboard"
          className="h-full hover:scale-[1.02] flex items-center space-x-2"
        >
          <img src="TrackDailyLogo.svg" alt="" className="h-full scale-[0.7]" />
          <h2 className="text-2xl">Track Daily </h2>
        </Link>
      )}
     
      <div className="flex items-center h-12 space-x-4 bg-[var(--secondary-color)] w-[30%] p-2 rounded-lg">
        <CiSearch />
        <input
          placeholder="search"
          className="border-none h-full w-full bg-[var(--secondary-color)]"
        ></input>
        <input
          className="border-none h-full bg-[var(--secondary-color)] w-full"
          onChange={handleSearchChange} 
        />
      </div>
      <div className="flex items-center space-x-4">
      <div className="flex items-center space-x-4">
      <CiSettings className="border p-2 size-11 shadow-lg rounded-full" />
      <CiBellOn className="border p-2 size-11 shadow-lg rounded-full"/>
      </div>
      <div className="border p-2 rounded-lg w-auto h-[6vh] shadow-lg">
      {/* User Profile or Auth Links */}
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
              to="/profile"
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
        <div className="flex gap-4">
          <Link to="/login" className="buttonStyle">
            Register
          </Link>
          <Link to="/signup" className="buttonStyle">
            Login
          </Link>
        </div>
        </div>
      )}
      </div>
        </div>
    </nav>
  );
}
