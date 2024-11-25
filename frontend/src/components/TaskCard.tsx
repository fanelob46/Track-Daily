import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";

type TaskCardProps = {
  title: string;
  date: string;
  description: string;
  tag: string;
};
const TaskCard = ({ title, date, description, tag }: TaskCardProps) => {
  return (
    <section className="border-2 border-red-500 w-[350px] p-4 space-y-3 rounded-xl hover:scale-[1.01] cursor-default">
      <h3 className="text-3xl">{title}</h3>
      <p>{date}</p>
      <p className="text-justify">{description}</p>
      <div className="flex justify-between items-center">
        <span className="border border-red-400 py-2 px-4 rounded-3xl text-white bg-red-400">
          {tag}
        </span>

        <div className="flex justify-between items-center w-[35%] border-2 border-red-400 py-2 px-4">
          <CiEdit className="scale-150 hover:scale-[1.75] cursor-pointer" />
          <MdDeleteOutline className="scale-150 hover:scale-[1.75] cursor-pointer" />
        </div>
      </div>
    </section>
  );
};

export default TaskCard;
