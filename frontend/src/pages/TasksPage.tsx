import { useEffect, useState } from "react";
import { useTaskStore } from "../../store/Task";
import TaskCard from "../components/TaskCard";
import AddTask from "../components/AddTask";
import { IoIosAddCircleOutline } from "react-icons/io";

export const TasksPage = () => {
  const { tasks, searchQuery, fetchTasks } = useTaskStore();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const loadTask = async () => {
      await fetchTasks();
    };
    loadTask();
  }, [fetchTasks]);

  const handleModalToggle = () => {
    setIsModalOpen((prev) => !prev);
  };

  // Filter tasks based on search query from store
  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-10">
      <div className="py-5 flex justify-end pr-20">
        <button onClick={handleModalToggle}>
          <IoIosAddCircleOutline className="text-4xl" />
        </button>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 h-[70vh] overflow-y-scroll">
        {filteredTasks.map((task) => (
          <TaskCard key={task._id} task={task} />
        ))}
      </div>

      {/* Add Task Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
            {/* Close Button */}
            <button
              onClick={handleModalToggle}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            >
              ✕
            </button>
            {/* AddTask Component */}
            <AddTask closeModal={handleModalToggle} />
          </div>
        </div>
      )}
    </div>
  );
};
