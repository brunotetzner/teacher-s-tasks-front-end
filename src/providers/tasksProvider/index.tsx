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
      .catch((err) => {
        console.error(err);
        toast({
          title: "Ocorreu um erro ao carregar suas tarefas",
          description:
            "Recarregue a pagína e tente novamente mais tarde caso o erro persista",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      });
  };

  useEffect(() => {
    getAllTasks();
  }, []);

  const postTask = (task: Itask) => {
    api
      .post("/tasks", task)
      .then(() => {
        getAllTasks();
        toast({
          title: "Tarefa criada com sucesso!",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((err) => {
        console.error(err);
        toast({
          title: "Ocorreu um erro ao salvar a tarefa",
          description:
            "Revise os dados e tente novamente mais tarde caso o erro persista",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      });
  };

  const updateTask = (task: Partial<Itask>, taskId: number) => {
    api
      .patch(`tasks/${taskId}`, task)
      .then(() => {
        getAllTasks();
        toast({
          title: "Tarefa editada com sucesso!",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((err) => {
        console.error(err);
        toast({
          title: "Ocorreu um erro ao editar a tarefa",
          description:
            "Revise os dados e tente novamente mais tarde caso o erro persista",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      });
  };

  const deleteTask = (taskId: number) => {
    api
      .delete(`tasks/${taskId}`)
      .then(() => {
        getAllTasks();

        toast({
          title: "Tarefa apagada",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((err) => {
        console.error(err);

        toast({
          title: "Ocorreu um erro ao apagar a tarefa",
          description:
            "Revise os dados e tente novamente mais tarde caso o erro persista",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      });
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
