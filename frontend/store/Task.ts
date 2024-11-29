import { create } from "zustand";

interface Task {
  _id: string;
  title: string;
  description: string;
  date: string;
  tag: string;
}

interface TaskStore {
  tasks: Task[];
  searchQuery: string; // state for search query
  setTasks: (tasks: Task[]) => void;
  setSearchQuery: (query: string) => void; // Action to update search query
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
  searchQuery: "", // Initialize search query as an empty string
  setTasks: (tasks) => set({ tasks }),
  setSearchQuery: (query) => set({ searchQuery: query }), // Set search query

  createTask: async (newTask) => {
    if (
      !newTask.title ||
      !newTask.description ||
      !newTask.date ||
      !newTask.tag
    ) {
      return { success: false, message: "Please enter all fields." };
    }

    const res = await fetch("http://localhost:3000/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    });

    const data = await res.json();
    if (!data?.data)
      return { success: false, message: "Failed to create task." };
    set((state) => ({ tasks: [...state.tasks, data.data] }));
    return { success: true, message: "Task created successfully." };
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
