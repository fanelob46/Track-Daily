import { Link } from "react-router-dom";
import Button from "./Button";

const AddTaskUI = () => {
  // const openAddUI = () => {
  //   console.log("Open UI");
  // };

  const handleAdd = () => {

  }
  return (
    <div className="w-[1000px] h-[60vh] space-y-4 ">
      <div className="bg-gray-50 p-4 flex flex-col justify-center items-center space-y-2 rounded-lg h-full">
        <img className="" src="emptyy.png" alt="" />
        <p className="text-gray-500">You don't have any tasks assigned</p>
        <p>List of tasks you've assigned to will appear hear</p>
      </div>
      <Link to={"/add-task"}>
        <Button name={"Create a new task"} buttonFunction={handleAdd} />
      </Link>
    </div>
  );
};

export default AddTaskUI;
