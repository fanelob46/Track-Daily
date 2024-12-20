import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useTaskStore } from "../../store/Task";

interface Task {
  _id: string;
  title: string;
  description: string;
  date: string;
  tag: string;
}

interface AddTaskProps {
  closeModal: () => void;
}

const AddTask: React.FC<AddTaskProps> = ({ closeModal }) => {
  const { createTask } = useTaskStore();

  const [newTask, setNewTask] = useState<Omit<Task, "_id">>({
    title: "",
    description: "",
    date: "",
    tag: "",
  });

  const handleAddTask = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const taskData = { ...newTask };
      await createTask(taskData);
      console.log("Task added:", newTask);
      closeModal(); // Close the modal after adding the task
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setNewTask((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section>
      <div className="border border-gray-400 p-6 max-w-md mx-auto bg-white shadow-lg rounded-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Add New Task</h2>
        <form className="px-10">
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Task Title"
              value={newTask.title}
              onChange={handleChange}
              className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              placeholder="Task Description"
              value={newTask.description}
              onChange={handleChange}
              className="mt-1 w-full border-gray-300 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              rows={4}
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              htmlFor="date"
              className="block text-sm font-medium text-gray-700"
            >
              Date
            </label>
            <DatePicker
              selected={newTask.date ? new Date(newTask.date) : null}
              onChange={(date) =>
                setNewTask((prev) => ({
                  ...prev,
                  date: date?.toDateString() || "",
                }))
              }
              className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholderText="Select a Date"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="tag"
              className="block text-sm font-medium text-gray-700"
            >
              Tag
            </label>
            <select
              id="tag"
              name="tag"
              value={newTask.tag}
              onChange={handleChange}
              className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="" disabled>
                Select a Tag
              </option>
              <option value="Gym">Gym</option>
              <option value="Travel">Travel</option>
              <option value="Work">Work</option>
              <option value="Personal">Personal</option>
              <option value="Shopping">Shopping</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <button
            onClick={handleAddTask}
            className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Add Task
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddTask;
