import { CiSearch } from "react-icons/ci";

export default function Navbar(){
    return(
       
            <nav className="flex justify-between p-4 bg-[var(--primary-color)] items-center col-span-12" >
                <div>Logo</div>
                {/* <div>Search</div> */}
                <div className="flex items-center space-x-4 bg-[var(--secondary-color)] w-[30%] p-2 rounded-lg">
                <CiSearch />
                <input placeholder="search" className="border-none bg-[var(--secondary-color)] w-full"></input>
                </div>
                <div className="flex">
                <p>Sign up</p>
                <p>Sign up</p>
                </div>
            </nav>
      
    )
}