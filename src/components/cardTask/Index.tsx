import {
  ContainerCard,
  CardHeader,
  CardBody,
  TextsDiv,
  Info,
  TextParagraph,
  TaskDateDiv,
  Footer,
  ButtonFooter,
} from "./styled";

import { RiPencilFill } from "react-icons/ri";
import { BsFillTrashFill } from "react-icons/bs";

interface ICardTaskProps {
  title: string;
  description: string;
  finish_date: string;
  id: number;
  setTask: any;
  onOpenModalEdit: () => void;
  onOpenModalDelete: () => void;
}
export const CardTask = ({
  title,
  description,
  finish_date,
  id,
  setTask,
  onOpenModalEdit,
  onOpenModalDelete,
}: ICardTaskProps) => {
  const handleClickModalEdit = () => {
    setTask({
      title,
      description,
      finish_date,
      id,
    });
    onOpenModalEdit();
  };

  const handleClickModalDelete = () => {
    console.log("go@!");
    setTask({
      title,
      description,
      finish_date,
      id,
    });
    onOpenModalDelete();
  };
  return (
    <ContainerCard>
      <CardHeader>{title}</CardHeader>
      <CardBody>
        <TextsDiv>
          <Info>
            <TextParagraph>{description}</TextParagraph>
          </Info>
        </TextsDiv>

        <TaskDateDiv>
          <label>entrega:</label>
          {finish_date}
        </TaskDateDiv>
      </CardBody>
      <Footer>
        <div>
          <ButtonFooter>
            <RiPencilFill />
          </ButtonFooter>
        </div>
        <div>
          <ButtonFooter onClick={handleClickModalDelete}>
            <BsFillTrashFill />
          </ButtonFooter>
        </div>
      </Footer>
    </ContainerCard>
  );
};
