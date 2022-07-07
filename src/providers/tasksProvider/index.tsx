import {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from "react";
import { Itask } from "../../interfaces/tasks";
import { useToast } from "@chakra-ui/react";
interface tasksProps {
  children: ReactNode;
}

interface UseTaskProviderData {
  tasks: Array<Itask>;
  getAllTasks: () => void;
  postTask: (task: Itask) => void;
  updateTask: (task: Itask) => void;
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

  const getAllTasks = () => {};

  useEffect(() => {
    getAllTasks();
  });

  const postTask = (task: Itask) => {};

  const updateTask = (task: Itask) => {};

  const deleteTask = (taskId: number) => {};

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
