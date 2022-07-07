import {
  Modal,
  ModalContent,
  ModalOverlay,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
} from "@chakra-ui/react";
import { DeleteText, ButtonDelete, DivButton, ButtonCancel } from "./style";
import { useTasks } from "../../providers/tasksProvider";

interface IModalDeleteTask {
  isOpen: boolean;
  onClose: () => void;
  taskId: number;
}

export function ModalDeleteTask({ isOpen, onClose, taskId }: IModalDeleteTask) {
  const { deleteTask } = useTasks();

  const handleClickToDelete = () => {
    deleteTask(taskId);
    onClose();
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        border="1px solid#FF1A25"
        marginTop="10%"
        boxShadow="-1px 2px 21px 3px #FF1A25"
        height="40vh"
        borderRadius="14px"
      >
        <ModalHeader
          bg="#CFCA45"
          w="100%"
          textAlign="center"
          fontSize="30px"
          paddingBottom="1%"
          color="#5B736E"
          borderRadius="10px 10px 0 0"
        >
          Excluir tarefa
        </ModalHeader>
        <ModalCloseButton marginRight="3%" marginTop="3%" color="white" />
        <ModalBody>
          <DeleteText>
            Tem certeza de que desejar excluir essa tarefa?
          </DeleteText>
          <DivButton>
            <ButtonCancel onClick={onClose}>Cancelar</ButtonCancel>
            <ButtonDelete onClick={handleClickToDelete}>Deletar</ButtonDelete>
          </DivButton>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
