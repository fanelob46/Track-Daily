import React, { useEffect } from 'react'
import { useTaskStore } from '../../store/Task';
import TaskCard from '../components/TaskCard';
import AddTaskUI from '../components/AddTaskUI';
import { Link } from 'react-router-dom';

export const TasksPage = () => {
  const { tasks, fetchTasks } = useTaskStore();
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadTask = async () => {
      await fetchTasks();
      // setLoading(true);
    };
    loadTask();
  }, [fetchTasks]);
  console.log(tasks);
  // if (loading) return <p>Loading jobs...</p>;

  return (
    <div className="space-y-10">
      <div className="py-5 px-10">
        <Link to={"/add-task"}>
          <AddTaskUI />
        </Link>
      </div>
      <div className="grid grid-cols-2">
        {tasks.map((task) => (
          <TaskCard key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
}
