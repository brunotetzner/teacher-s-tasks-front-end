import styled from "styled-components";

export const PageForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 2%;
`;

export const Select = styled.select`
  width: 90%;
  height: 40px;
  padding-left: 20px;
  font-size: 15px;
  background-color: ${function (props) {
    return props.theme.black.third;
  }};
  border: none;
`;

export const Input = styled.input`
  width: 90%;
  height: 40px;
  padding-left: 20px;
  font-size: 15px;
  margin: 1%;
  background-color: ${function (props) {
    return props.theme.black.third;
  }};
  border: none;
`;
