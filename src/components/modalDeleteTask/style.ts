import styled from "styled-components";

export const DeleteText = styled.h4`
  width: 100%;
  height: 70%;
  font-size: 20px;
  display: flex;
  align-items: center;
  text-align: center;
`;
export const DivButton = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ButtonDelete = styled.button`
  background-color: ${function (props) {
    return props.theme.red.primary;
  }};
  color: ${function (props) {
    return props.theme.white.primary;
  }};

  width: 35%;
  height: 90%;
  :hover {
    transition-duration: 1s;
    cursor: pointer;
    border-color: ${function (props) {
      return props.theme.yellow.primary;
    }};
    box-shadow: 0px -1px 21px 7px #ff1a25;
  }
`;

export const ButtonCancel = styled(ButtonDelete)`
  background-color: ${function (props) {
    return props.theme.green.primary;
  }};
  :hover {
    transition-duration: 1s;
    cursor: pointer;
    border-color: ${function (props) {
      return props.theme.black.primary;
    }};
    box-shadow: 0px -1px 21px 7px #60ce71;
  }
`;
