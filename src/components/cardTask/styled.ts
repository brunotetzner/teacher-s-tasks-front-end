import styled from "styled-components";

export const ContainerCard = styled.section`
  width: 207px;
  height: 229px;
  margin: 1%;
`;

export const CardHeader = styled.header`
  width: 100%;
  text-align: center;
  padding: 5%;
  height: auto;
  color: ${function (props) {
    return props.theme.black.primary;
  }};
  background-color: ${function (props) {
    return props.theme.yellow.primary;
  }};
  border-radius: 8px 8px 0 0;

  font-weight: 800;
  font-size: 14px;
`;
export const CardBody = styled.section`
  border: 6px solid;
  border-top: none;
  border-radius: 0 0 0px 12px;
  height: 70%;
  border-color: ${function (props) {
    return props.theme.black.secondary;
  }};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TextsDiv = styled.div`
  width: 90%;
  height: 30%;

  padding-top: 5%;
  padding-left: 5%;
  padding-right: 5%;
`;

export const Info = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  /* padding-top: 4%; */
`;

export const TaskDateDiv = styled(Info)`
  width: 95%;
  flex-direction: row;
  justify-content: flex-end;
  padding-right: 5%;
  font-weight: bold;
  font-size: 21px;
  color: ${function (props) {
    return props.theme.black.seconday;
  }};
  label {
    padding-top: 4.3%;
    font-weight: lighter;
    font-size: 12px;
    color: ${function (props) {
      return props.theme.black.primary;
    }};
  }
`;

export const TextParagraph = styled.p`
  font-size: 15px;
  width: 100%;
  padding: 10px;
  color: ${function (props) {
    return props.theme.black.primary;
  }};
`;
export const Footer = styled.div`
  width: 100px;
  height: 24px;
  background-color: ${function (props) {
    return props.theme.black.secondary;
  }};
  margin-left: auto;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 0 0 12px 12px;
  div {
    width: 50%;
    display: flex;
    justify-content: center;
  }
`;

export const ButtonFooter = styled.button`
  position: absolute;
  bottom: 18%;
  border: 0;
  height: 22px;
  color: ${function (props) {
    return props.theme.green.primary;
  }};
  background-color: ${function (props) {
    return props.theme.black.secondary;
  }};
  font-size: 20px;
  :hover {
    transition: 1s;
    color: ${function (props) {
      return props.theme.white.primary;
    }};
    border: 1px solid;
    border-color: ${function (props) {
      return props.theme.green.primary;
    }};
  }
  :active {
    transition: 0.5s;
    font-size: 17px;
  }
`;
