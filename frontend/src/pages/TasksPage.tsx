// import React from 'react'
import React, { useEffect } from 'react'
import { useTaskStore } from '../../store/Task';
import TaskCard from '../components/TaskCard';
// import AddTaskUI from '../components/AddTaskUI';
import { Link } from 'react-router-dom';
import { IoIosAddCircleOutline } from "react-icons/io";


export const TasksPage = () => {
  const { tasks, fetchTasks } = useTaskStore();

  useEffect(() => {
    const loadTask = async () => {
      await fetchTasks();
    };
    loadTask();
  }, [fetchTasks]);
  console.log(tasks);

  return (
    <div className="space-y-10">
      <div className='py-5 flex justify-end pr-20'>
        <Link to={"/add-task"}>
          <IoIosAddCircleOutline className="text-4xl" />
        </Link>
      </div>

      <div className="grid grid-cols-4 gap-10 px-10 py-10 ">
        {tasks.map((task) => (
          <TaskCard key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
}
