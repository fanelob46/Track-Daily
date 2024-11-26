const AddTaskUI = () => {
  const openAddUI = () => {
    console.log("Open UI");
  };
  return (
    <div
      className="border w-fit p-10 cursor-pointer hover:scale-[1.02] hover:bg-gray-100"
      onClick={openAddUI}
    >
      <img
        className="scale-150 mx-auto  hover:bg-gray-100"
        src="AddTaskUI.svg"
        alt=""
      />
    </div>
  );
};

export default AddTaskUI;
