import { CiSearch } from "react-icons/ci";
import Button from "./Button";
import { Link } from "react-router-dom";

export default function Navbar() {
  const handleSignUp = () => {};

  const handlelogin = () => {};

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
      <div className="flex gap-4">
        <Link to="/login">
          <Button name={"login"} buttonFunction={handlelogin} />
        </Link>
        <Link to="/signup">
          <Button name={"Register"} buttonFunction={handleSignUp} />
        </Link>
      </div>
    </nav>
  );
}
