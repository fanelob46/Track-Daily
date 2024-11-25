import React, { useState } from "react";
import Button from "./Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EditTask = () => {
  const [editTask, setEditTask] = useState({
    title: "",
    description: "",
    date: "",
    tag: "",
  });

  const handleSaveTask = () => {
    console.log(editTask);
  };

  const handleCancel = () => {
    setEditTask({
      title: "",
      description: "",
      date: "",
      tag: "",
    });
    console.log("Task editing cancelled");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEditTask((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="">
      <div className="border border-gray-400 p-6 max-w-md mx-auto bg-white shadow-lg rounded-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Edit Task</h2>
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
              value={editTask.title}
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
              value={editTask.description}
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
              selected={editTask.date ? new Date(editTask.date) : null}
              onChange={(date) =>
                setEditTask((prev) => ({
                  ...prev,
                  date: date?.toISOString() || "",
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
            <input
              type="text"
              id="tag"
              name="tag"
              placeholder="Task tag (e.g., Work, Personal)"
              value={editTask.tag}
              onChange={handleChange}
              className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="flex space-x-4">
            <Button name="Save Task" buttonFunction={handleSaveTask} />
            <Button name="Cancel" buttonFunction={handleCancel} />
          </div>
        </form>
      </div>
    </section>
  );
};

export default EditTask;
