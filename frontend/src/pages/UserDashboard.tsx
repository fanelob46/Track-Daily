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
    <div className="">
      <div className="flex justify-between items-center border pr-10">
        <UserInfo />
        <FilterDropdown />
      </div>

      {/* Main content section */}
      <div className="flex justify-between pt-6 h-[70vh]">
        <div className="grid grid-cols-3 gap-10   border border-red-300 overflow-y-scroll">
          {tasks.length > 0 ? (
            limitedTasks.map((task) => <TaskCard key={task._id} task={task} />)
          ) : (
            <AddTaskUI />
          )}
        </div>

        {/* Calendar and TagFilter */}
        <div className="flex flex-col justify-between">
          <Calendar />
          <TagFilter />
        </div>
      </div>
    </div>
  );
};
