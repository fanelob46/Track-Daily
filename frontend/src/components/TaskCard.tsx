import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { useTaskStore } from "../../store/Task";
import { useState } from "react";
import UserInfo from "./UserInfo";

interface Task {
  _id: string;
  title: string;
  description: string;
  date: string;
  tag: string;
}

type TaskCardProps = {
  task: Task;
};

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const { deleteTask, updateTask } = useTaskStore();
  const [isModalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: task.title,
    description: task.description,
    date: task.date,
    tag: task.tag,
  });

  const tagOptions = [
    "Work",
    "Travel",
    "Shopping",
    "Personal",
    "Gym",
    "O ther",
  ];

  const handleDelete = async (taskId: string) => {
    try {
      await deleteTask(taskId);
    } catch (error) {
      console.error("Error deleting task", error);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async () => {
    try {
      await updateTask(task._id, formData);
      setModalOpen(false);
    } catch (error) {
      console.error("Error updating task", error);
    }
  };

  return (
    <>
   
      {/* Task Card */}
      <section className="border-2 border-gray-300 shadow-lg w-[350px] p-4 space-y-3 rounded-xl hover:scale-[1.01] cursor-default">
        <h3 className="text-3xl">{task.title}</h3>
        <p>{task.date}</p>
        <p className="text-justify">{task.description}</p>
        <div className="flex justify-between items-center">
          <span className="p-2 rounded-2xl min-w-[80px] bg-[#6444f4] text-white text-center hover:scale-[1.02]">
            {task.tag}
          </span>

          <div className="flex justify-between items-center w-[35%] border-2 border-[#6444f4] py-2 px-4">
            {/* Edit Icon */}
            <CiEdit
              className="scale-150 hover:scale-[1.75] cursor-pointer"
              onClick={() => setModalOpen(true)}
            />
            {/* Delete Icon */}
            <MdDeleteOutline
              onClick={() => handleDelete(task._id)}
              className="scale-150 hover:scale-[1.75] cursor-pointer"
            />
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-[400px] space-y-4">
            <h3 className="text-xl font-semibold">Edit Task</h3>
            <div className="space-y-3">
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Title"
                className="w-full border border-gray-300 p-2 rounded"
              />
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Description"
                className="w-full border border-gray-300 p-2 rounded"
              />
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className="w-full border border-gray-300 p-2 rounded"
              />
              <select
                name="tag"
                value={formData.tag}
                onChange={handleInputChange}
                className="w-full border border-gray-300 p-2 rounded"
              >
                {tagOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setModalOpen(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdate}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TaskCard;
