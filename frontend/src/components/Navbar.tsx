import { CiSearch } from "react-icons/ci";
import Button from "./Button";

export default function Navbar() {
  const handleSignUp = () =>{

  };
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
      <div className="flex gap-4">
        <Button name={"Register"} buttonFunction={handleSignUp}/>
        <Button name={"Login"} buttonFunction={handleSignUp}/>
      </div>
    </nav>
  );
}
