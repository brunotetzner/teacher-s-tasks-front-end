import styled from "styled-components";

export const PageArticle = styled.article`
  width: 95%;
  margin-left: 2.5%;
  height: 70vh;
`;

export const TitleSection = styled.section`
  width: 100%;

  padding-top: 2%;
  padding-bottom: 2%;
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: ${function (props) {
    return props.theme.black.secondary;
  }};
`;

export const ContainerCards = styled.section`
  width: 100%;
  overflow: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const ButtonAddTask = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 100px;
  background-color: ${function (props) {
    return props.theme.green.primary;
  }};
  color: ${function (props) {
    return props.theme.white.primary;
  }};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 2%;

  :hover {
    transition: 1s;
    width: 45px;
    height: 45px;
  }
`;
