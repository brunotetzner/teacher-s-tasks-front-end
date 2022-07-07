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
import { useState } from "react";
import { Itask } from "../../interfaces/tasks";
import { ModalEditTask } from "../modalEditTask";
import { ModalCreateTask } from "../modalCreateTask";
export const PageBody = () => {
  const { tasks } = useTasks();
  const [task, setTask] = useState<Itask>({
    id: 117,
    title: "finish work",
    description: "finish work to students",
    finish_date: "25/12/2022",
  });

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

  const {
    isOpen: isModalCreateOpen,
    onOpen: onModalCreateOpen,
    onClose: isModalCreateClose,
  } = useDisclosure();

  return (
    <PageArticle>
      <ModalDeleteTask
        isOpen={isModalDeleteOpen}
        onClose={onModalDeleteClose}
        taskId={task.id}
      />
      <ModalEditTask
        isOpen={isModalEditOpen}
        onClose={onModalEditClose}
        oldTask={task}
      />

      <ModalCreateTask
        isOpen={isModalCreateOpen}
        onClose={isModalCreateClose}
      />
      <TitleSection>
        Minhas tarefas
        <ButtonAddTask onClick={onModalCreateOpen}>+</ButtonAddTask>
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
