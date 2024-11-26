import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const MainLayout: React.FC = () => {
  return (
    <div className="grid grid-cols-12 ">
      <Navbar />
      <Sidebar />
      <div className="border-2 col-span-10">
   
      </div>
    </div>
  );
};
 
export default MainLayout;
