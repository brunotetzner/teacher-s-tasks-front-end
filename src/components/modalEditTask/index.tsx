import {
  Modal,
  ModalContent,
  ModalOverlay,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
} from "@chakra-ui/react";

import { PageForm, Input, Select } from "./styled";
import { Itask } from "../../interfaces/tasks";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useTasks } from "../../providers/tasksProvider";
import { ButtonForm } from "../buttonForm";
interface IModalEditTask {
  isOpen: boolean;
  onClose: () => void;
  oldTask: Itask;
}

export const ModalEditTask = ({ isOpen, onClose, oldTask }: IModalEditTask) => {
  const registerSchema = yup.object().shape({
    title: yup.string(),
    description: yup.string().max(127),
    finish_date: yup.string(),
  });

  const { register, handleSubmit } = useForm<Itask>({
    resolver: yupResolver(registerSchema),
  });

  const { updateTask } = useTasks();
  const onProductRegister = (task: Partial<Itask>) => {
    if (task.description === "") {
      delete task.description;
    }
    if (task.finish_date === "") {
      delete task.finish_date;
    }
    if (task.title === "") {
      delete task.title;
    }
    updateTask(task, oldTask.id);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        border="4px solid #606060"
        boxShadow="-1px 2px 21px 3px #CFCA45"
        height="50vh"
        borderRadius="14px"
        marginTop="24vh"
      >
        <ModalHeader
          bg="#CFCA45"
          w="100%"
          textAlign="center"
          fontSize="30px"
          paddingBottom="1%"
          color=""
          borderRadius="10px 10px 0 0"
        >
          Editar tarefa
        </ModalHeader>
        <ModalCloseButton marginRight="3%" marginTop="3%" color="black" />
        <ModalBody>
          <PageForm onSubmit={handleSubmit(onProductRegister)}>
            <Input
              {...register("description")}
              placeholder="Nova descrição(opcional)"
            />

            <Input
              {...register("finish_date")}
              placeholder="Nova data"
              type="date"
            />

            <Select id="4" {...register("title")}>
              <option value={""}>Novo titulo(opcional)</option>

              <option value={"Aplicação de prova"}>Aplicação de prova</option>

              <option value={"Correção de prova"}>Correção de prova</option>

              <option value={"Correção de atividades"}>
                Correção de atividades
              </option>

              <option value={"Reunião de pais"}>Reunião de pais</option>

              <option value={"Conselho de professores"}>
                Conselho de professores
              </option>

              <option value={"Palestra"}>Palestra</option>

              <option value={"Outros"}>Outros</option>
            </Select>

            <ButtonForm text="salvar" />
          </PageForm>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
