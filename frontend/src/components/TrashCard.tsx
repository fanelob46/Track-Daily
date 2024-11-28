import { Task } from "../definitions";

type TaskCardProps = {
  task: Task;
};

const TrashCard: React.FC<TaskCardProps> = ({ task }) => {
  return (
    <section className="border-2 border-gray-300 shadow-lg w-[350px] p-4 space-y-3 rounded-xl hover:scale-[1.01] cursor-default">
      <h3 className="text-3xl">{task.title}</h3>
      <p>{task.date}</p>
      <p className="text-justify">{task.description}</p>
      <div className="flex justify-between items-center">
        <span className="p-2 rounded-2xl min-w-[80px] bg-[#6444f4] text-white text-center hover:scale-[1.02]">
          {task.tag}
        </span>
      </div>
    </section>
  );
};

export default TrashCard;
