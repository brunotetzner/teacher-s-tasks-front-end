import {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from "react";
import { Itask } from "../../interfaces/tasks";
import { useToast } from "@chakra-ui/react";
import { api } from "../../services/api";
interface tasksProps {
  children: ReactNode;
}

interface UseTaskProviderData {
  tasks: Array<Itask>;
  getAllTasks: () => void;
  postTask: (task: Itask) => void;
  updateTask: (task: Partial<Itask>, taskId: number) => void;
  deleteTask: (taskId: number) => void;
}

export const TasksContext = createContext<UseTaskProviderData>(
  {} as UseTaskProviderData
);

export const useTasks = () => {
  const context = useContext(TasksContext);
  return context;
};

export function TasksProvider({ children }: tasksProps) {
  const [tasks, setTasks] = useState<Itask[]>([]);
  const toast = useToast();

  const getAllTasks = () => {
    api
      .get("/tasks")
      .then((response) => setTasks(response.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getAllTasks();
  }, []);

  const postTask = (task: Itask) => {
    api
      .post("/tasks", task)
      .then(() => getAllTasks())
      .catch((err) => console.error(err));
  };

  const updateTask = (task: Partial<Itask>, taskId: number) => {
    api
      .patch(`tasks/${taskId}`, task)
      .then(() => getAllTasks())
      .catch((err) => console.error(err));
  };

  const deleteTask = (taskId: number) => {
    api
      .delete(`tasks/${taskId}`)
      .then(() => getAllTasks())
      .catch((err) => console.error(err));
  };

  return (
    <TasksContext.Provider
      value={{
        tasks,
        getAllTasks,
        postTask,
        updateTask,
        deleteTask,
      }}
    >
      {children},
    </TasksContext.Provider>
  );
}
