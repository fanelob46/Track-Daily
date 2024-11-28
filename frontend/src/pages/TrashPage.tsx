import { useEffect } from "react";
import { useTaskStore } from "../../store/Task";
import TrashCard from "../components/TrashCard";
import { MdDeleteOutline } from "react-icons/md";

export const TrashPage = () => {
  const { tasks, fetchTasks } = useTaskStore();

  useEffect(() => {
    const loadTask = async () => {
      await fetchTasks();
    };
    loadTask();
  }, [fetchTasks]);
  const deleteAllTasks = () => {};
  return (
    <div className="space-y-10 ">
      <div
        onClick={deleteAllTasks}
        className="py-5 flex items-center space-x-4 w-fit p-4 cursor-pointer hover:scale-[1.02]"
      >
        <MdDeleteOutline className="scale-[2.5]  cursor-pointer" />
        <h3 className="text-3xl">Delete All Tasks</h3>
      </div>

      <div className="grid grid-cols-4 gap-10 h-[70vh] overflow-y-scroll">
        {tasks.map((task) => (
          <TrashCard key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
};
