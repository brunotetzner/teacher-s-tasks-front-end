import styled from "styled-components";

export const StyledButton = styled.button`
  border: 0;
  margin-top: 2%;
  background-color: ${function (props) {
    return props.theme.green.primary;
  }};
  width: 94%;
  height: 50px;
  color: ${function (props) {
    return props.theme.white.primary;
  }};
  font-size: 20px;
  font-weight: bold;
  :hover {
    transition-duration: 1s;
    cursor: pointer;
    border-color: ${function (props) {
      return props.theme.black.third;
    }};
    box-shadow: 0px -1px 21px 7px #60ce71;
  }
`;
