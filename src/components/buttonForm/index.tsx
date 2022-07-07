import { StyledButton } from "./styled";
interface IButton {
  text: string;
}
export const ButtonForm = ({ text }: IButton) => {
  return <StyledButton type="submit">{text}</StyledButton>;
};
