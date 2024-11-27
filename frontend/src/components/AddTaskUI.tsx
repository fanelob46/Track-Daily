import Button from "./Button";

const AddTaskUI = () => {
  // const openAddUI = () => {
  //   console.log("Open UI");
  // };

  const handleAdd = () => {

  }
  return (
    <div className="w-[70%] h-[60vh]">
    <div className="bg-gray-50 p-4 flex flex-col justify-center items-center space-y-2 rounded-lg h-full">
      <img
        className=""
        src="emptyy.png"
        alt=""
      />
      <p className="text-gray-500">You don't have any tasks assigned</p>
      <p>List of tasks you've assigned to will appear hear</p>
    </div>
    <Button name={"Create a new task"} buttonFunction={handleAdd} />
    </div>
  );
};

export default AddTaskUI;
