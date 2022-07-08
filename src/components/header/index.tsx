import {
  HeaderContainer,
  Logo,
  LogoDiv,
  PageSearch,
  Input,
  ButtonSearch,
} from "./styled";
import { useState } from "react";
import LogoImg from "../../assets/logo.svg";
import { ImSearch } from "react-icons/im";
import { useTasks } from "../../providers/tasksProvider";
import { useToast } from "@chakra-ui/react";

export const Header = () => {
  const { tasks, setFilteredTasks } = useTasks();
  const [inputValue, setInputValue] = useState<string>("");
  const toast = useToast();

  const searchTask = (inputValue: string) => {
    const filterTasks = tasks.map((task) => {
      if (
        task.description.toLowerCase().includes(inputValue.toLowerCase()) ||
        task.title.toLowerCase().includes(inputValue.toLowerCase())
      ) {
        return task;
      } else {
        return undefined;
      }
    });
    const removeUndefined = filterTasks.filter((task) => task !== undefined);

    if (removeUndefined.length > 0) {
      setFilteredTasks(removeUndefined);
    } else {
      setFilteredTasks(tasks);

      toast({
        title: "Não foi encontrado nenhuma tarefa para o valor digitado",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <HeaderContainer>
      <LogoDiv>
        <Logo src={LogoImg} alt="logo" />
      </LogoDiv>
      <PageSearch>
        <Input
          id="6"
          placeholder="Pesquisar por tarefa"
          onChange={(evt) => setInputValue(evt.target.value)}
        />
        <ButtonSearch onClick={() => searchTask(inputValue)}>
          <ImSearch />
        </ButtonSearch>
      </PageSearch>
    </HeaderContainer>
  );
};
