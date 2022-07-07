import {
  PageArticle,
  TitleSection,
  ContainerCards,
  ButtonAddTask,
} from "./styled";
import { useTasks } from "../../providers/tasksProvider";
import { CardTask } from "../cardTask/Index";
import { ModalDeleteTask } from "../modalDeleteTask";
import { useDisclosure } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Itask } from "../../interfaces/tasks";

export const PageBody = () => {
  const { tasks } = useTasks();
  const [task, setTask] = useState<Itask>({
    id: 117,
    title: "finish work",
    description: "finish work to students",
    finish_date: "25/12/2022",
  });

  useEffect(() => {
    console.log("NEW TASK LENGTH", tasks.length);
  }, [tasks]);

  const {
    isOpen: isModalEditOpen,
    onOpen: onModalEditOpen,
    onClose: onModalEditClose,
  } = useDisclosure();

  const {
    isOpen: isModalDeleteOpen,
    onOpen: onModalDeleteOpen,
    onClose: onModalDeleteClose,
  } = useDisclosure();

  return (
    <PageArticle>
      <ModalDeleteTask
        isOpen={isModalDeleteOpen}
        onClose={onModalDeleteClose}
        taskId={task.id}
      />
      <TitleSection>
        Minhas tarefas <ButtonAddTask>+</ButtonAddTask>
      </TitleSection>
      <ContainerCards>
        {tasks.map((task) => (
          <CardTask
            id={task.id}
            title={task.title}
            description={task.description}
            finish_date={task.finish_date}
            onOpenModalEdit={onModalEditOpen}
            onOpenModalDelete={onModalDeleteOpen}
            setTask={setTask}
          />
        ))}
      </ContainerCards>
    </PageArticle>
  );
};
