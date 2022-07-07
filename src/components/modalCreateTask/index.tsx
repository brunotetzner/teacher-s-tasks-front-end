import {
  Modal,
  ModalContent,
  ModalOverlay,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
} from "@chakra-ui/react";

import { PageForm, Input, Select, Span } from "./styled";
import { Itask } from "../../interfaces/tasks";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useTasks } from "../../providers/tasksProvider";
import { ButtonForm } from "../buttonForm";

interface IModalEditTask {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalCreateTask = ({ isOpen, onClose }: IModalEditTask) => {
  const registerSchema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    description: yup.string().required("Campo obrigatório").max(127),
    finish_date: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Itask>({
    resolver: yupResolver(registerSchema),
  });

  const { postTask } = useTasks();
  const onProductRegister = (task: Itask) => {
    postTask(task);
  };
  console.log(errors);
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        border="4px solid #606060"
        boxShadow="-1px 2px 21px 3px #CFCA45"
        height="65vh"
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
          Nova tarefa
        </ModalHeader>
        <ModalCloseButton marginRight="3%" marginTop="3%" color="black" />
        <ModalBody>
          <PageForm onSubmit={handleSubmit(onProductRegister)}>
            <Select id="4" {...register("title")}>
              <option value={""}>Titulo</option>

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
            {errors && <Span>{errors.title?.message}</Span>}

            <Input
              {...register("description")}
              placeholder="Descrição da tarefa"
            />
            {errors && <Span>{errors.description?.message}</Span>}

            <Input
              {...register("finish_date")}
              placeholder="Data da finalização"
              type="date"
            />
            {errors && <Span>{errors.finish_date?.message}</Span>}

            <ButtonForm text="salvar" />
          </PageForm>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
