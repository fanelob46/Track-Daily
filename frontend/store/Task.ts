import { set } from "mongoose";
// import { pid } from "process";
import { create } from "zustand";

interface Task {
  _id: string;
  title: string;
  description: string;
  date: string;
  tag: number;
  //   UserId: string;
}

interface TaskStore {
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
  createTask: (
    newTask: Omit<Task, "_id">
  ) => Promise<{ success: boolean; message: string }>;
  fetchTasks: () => Promise<void>;
  deleteTask: (pid: string) => Promise<{ success: boolean; message: string }>;
  updateTask: (
    pid: string,
    updatedJob: Partial<Omit<Task, "_id">>
  ) => Promise<{ success: boolean; message: string }>;
}

export const useTaskStore = create<TaskStore>((set) => ({
  tasks: [],
  setTasks: (tasks) => set({ tasks }),

  createTask: async (newTask) => {
    if (
      !newTask.title ||
      !newTask.description ||
      !newTask.date ||
      !newTask.tag
    ) {
      return { success: false, message: "please enter all fields.." };
    }

    const res = await fetch("api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    });

    const data = await res.json();
    if (!data?.data)
      return { success: false, message: "failed to create task" };
    set((state) => ({ tasks: [...state.tasks, data.data] }));
    return { success: true, message: "Task created successfully" };
  },

  fetchTasks: async () => {
    const res = await fetch("/api/tasks");
    const data = await res.json();
    set({ tasks: data.data });
  },

  deleteTask: async (pid) => {
    const res = await fetch(`/api/tasks/${pid}`, {
      method: "DELETE",
    });

    const data = await res.json();
    if (!data.success) return { success: false, message: data.data };

    set((state) => ({
      tasks: state.tasks.filter((task) => task._id !== pid),
    }));
    return { success: true, message: data.message };
  },

  updateTask: async (pid, updatedTask) => {
    const res = await fetch(`/api/tasks/${pid}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    });
    const data = await res.json();
    if (!data.success) return { success: false, message: data.message };

    set((state) => ({
      tasks: state.tasks.map((task) => (task._id === pid ? data.data : task)),
    }));
    return { success: true, message: data.message };
  },
}));
