import { useEffect } from "react";
import Calendar from "../components/Calendar";
import AddTaskUI from "../components/AddTaskUI";
import FilterDropdown from "../components/DateFilter";
import UserInfo from "../components/UserInfo";
import TagFilter from "../components/TagFilter";
import { useTaskStore } from "../../store/Task";
import TaskCard from "../components/TaskCard";
export const UserDashboard = () => {
  const { tasks, fetchTasks } = useTaskStore();

  useEffect(() => {
    const loadTask = async () => {
      await fetchTasks();
    };
    loadTask();
  }, [fetchTasks]);

  // Limit the tasks displayed to 4
  const limitedTasks = tasks.slice(0, 8);

  return (
    <div className="flex justify-between">
      <div className="space-y-4 w-[65%]">
      <div className="bg-white rounded-xl p-2 shadow-lg">
        <UserInfo />
      </div>
        {/* Main content section */}
          <div className="grid grid-cols-3 gap-10 overflow-y-scroll h-[70vh] bg-white shadow-lg p-2 rounded-lg my-2">
            {tasks.length > 0 ? (
              limitedTasks.map((task) => (
                <TaskCard key={task._id} task={task} />
              ))
            ) : (
              <AddTaskUI />
            )}
          </div>
          </div>
        {/* FilterDropdown, Calendar, and TagFilter */}
        <div className="flex flex-col justify-between w-[30%] items-end space-y-[0px]">
          <div className="w-full bg-white p-2 rounded-lg shadow-lg">
          <FilterDropdown />
          </div>
          <div className="w-full bg-white p-2 rounded-3xl shadow-lg">
          <Calendar />
          </div>
          <div className="w-full">
          <TagFilter />
          </div>
        </div>
    </div>
  );
};
