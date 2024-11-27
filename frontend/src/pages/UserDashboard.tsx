import Calendar from "../components/Calendar";
import AddTaskUI from "../components/AddTaskUI";
import FilterDropdown from "../components/DateFilter";
import UserInfo from "../components/UserInfo";

export const UserDashboard = () => {
  return <div className="p-10">
          <div className="flex justify-between">
            <UserInfo/>
            <FilterDropdown/>
          </div>
          <div className="flex justify-between pt-6 h-[70vh]">
          <AddTaskUI/>
          <div className="">
            <Calendar/>
          </div>
          </div>
         
  </div>;
};
