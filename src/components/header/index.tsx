import {
  HeaderContainer,
  Logo,
  LogoDiv,
  PageSearch,
  Input,
  ButtonSearch,
} from "./styled";
import LogoImg from "../../assets/logo.svg";
import { ImSearch } from "react-icons/im";
export const Header = () => {
  return (
    <HeaderContainer>
      <LogoDiv>
        <Logo src={LogoImg} alt="logo" />
      </LogoDiv>
      <PageSearch>
        <Input
          id="6"
          placeholder="Pesquisar por tarefa"
          // onChange={(evt) => setNameToSearchProduct(evt.target.value)}
        />
        <ButtonSearch>
          <ImSearch />
        </ButtonSearch>
      </PageSearch>
    </HeaderContainer>
  );
};
