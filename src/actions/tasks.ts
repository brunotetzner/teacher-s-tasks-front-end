import taskAPi from "../repositories/tasks";
import { useToast } from "@chakra-ui/react";
import { ALL_CARDS } from "./actionTypes" 

export const getAllTasks = () => async(dispatch: any) => {
    try {
        const payload = await taskAPi.getAllTasks()
        dispatch({
            payload,
            type: ALL_CARDS
        });
    } catch(err) {
        const toast = useToast();
        console.error(err);
        toast({
          title: "Ocorreu um erro ao carregar suas tarefas",
          description:
            "Recarregue a pagína e tente novamente mais tarde caso o erro persista",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      };
  };

  export const postTask = (task: models.Task) => async (dispatch : any)=> {
   try{
     await taskAPi.postTask(task)
   } catch (err) {
        const toast = useToast();
        console.error(err);
        toast({
          title: "Ocorreu um erro ao salvar a tarefa",
          description:
            "Revise os dados e tente novamente mais tarde caso o erro persista",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      };
  };

  export const updateTask = (task: models.Task, taskId: number) => async (dispatch : any) => {
    try{
        await taskAPi.updateTask(task, taskId)
      } catch (err) {
           const toast = useToast();
           console.error(err);
           toast({
             title: "Ocorreu um erro ao atualizar a tarefa",
             description:
               "Revise os dados e tente novamente mais tarde caso o erro persista",
             status: "error",
             duration: 9000,
             isClosable: true,
           });
         };
  };

 
 export const deleteTask = (taskId: number) => async (dispatch : any) => {
    try{
        await taskAPi.deleteTask(taskId)
      } catch (err) {
           const toast = useToast();
           console.error(err);
           toast({
             title: "Ocorreu um erro ao excluir a tarefa",
             description:
               "Revise os dados e tente novamente mais tarde caso o erro persista",
             status: "error",
             duration: 9000,
             isClosable: true,
           });
         };
  };