import React from 'react'
import FilterDropdown from '../components/DateFilter'
import { useEffect, useState } from "react";
import { useTaskStore } from "../../store/Task.ts";
import AddTask from '../components/AddTask.tsx';

export const UserDashboard = () => {
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
    <div>
      <FilterDropdown/>
      <AddTask/>
    </div>
  )
}
