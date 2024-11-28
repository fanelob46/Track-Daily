import { CiSearch } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export default function Navbar() {
  const { userInfo } = useSelector((state: RootState) => state.auth);
  return (
    <nav className="flex justify-between p-4 bg-[var(--primary-color)] items-center col-span-full h-20">
      <div className="flex items-center gap-2 font-semibold pl-2">
        <img src="/TrackDailyLogo.svg" className="w-7" />
        <p>Track Daily</p>
      </div>
      {/* <div>Search</div> */}
      <div className="flex items-center h-12 space-x-4 bg-[var(--secondary-color)] w-[30%] p-2 rounded-lg">
        <CiSearch />
        <input
          placeholder="search"
          className="border-none h-full bg-[var(--secondary-color)] w-full"
        ></input>
      </div>
      {userInfo ? (
        <Link to="/profile" className="flex w-[100px] justify-between items-center">
          <FaRegUserCircle className="scale-[2]" />
          <div className="bg-gray-200 p-2 rounded-lg">
            <p>{userInfo.firstName}</p>
          </div>
        </Link>
      ) : (
        <div className="flex gap-4">
          <Link to="/login">Register</Link>
          <Link to="/signup">Login</Link>
        </div>
      )}
    </nav>
  );
}
