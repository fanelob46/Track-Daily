import { Task } from "../definitions";
import TaskCard from "./TaskCard";

const TaskGrid = ({ tasks }: { tasks: Task[] }) => {
  return (
    <div className="grid grid-cols-2 gap-4 items-center justify-center border border-blue-400 p-4 ">
      {tasks.map((task) => (
        <TaskCard key={task._id} task={task} />
      ))}
    </div>
  );
};

export default TaskGrid;
