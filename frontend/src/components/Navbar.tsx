import { CiSearch } from "react-icons/ci";

export default function Navbar() {
  return (
    <nav className="flex justify-between p-4 bg-[var(--primary-color)] items-center col-span-full h-20">
      <div>Logo</div>
      {/* <div>Search</div> */}
      <div className="flex items-center h-12 space-x-4 bg-[var(--secondary-color)] w-[30%] p-2 rounded-lg">
        <CiSearch />
        <input
          placeholder="search"
          className="border-none h-full bg-[var(--secondary-color)] w-full"
        ></input>
      </div>
      <div className="flex">
        <p>Sign up</p>
        <p>Sign up</p>
      </div>
    </nav>
  );
}
