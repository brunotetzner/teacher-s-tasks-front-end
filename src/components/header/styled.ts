import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 97.5vw;
  padding-right: 2.5vw;
  height: 14vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 500px) {
    flex-direction: column;
    width: 100vw;
    height: 18vh;
    padding: 0;
  } ;
`;

export const LogoDiv = styled.div`
  height: 100%;
  width: 300px;
  padding-bottom: 4%;
  padding-top: 3%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${function (props) {
    return props.theme.yellow.primary;
  }};
  border-radius: 0 0 30px 0px;

  @media (max-width: 500px) {
    width: 100%;
    height: 50%;

    border-radius: 0;
    padding-bottom: 2%;
    padding-top: 1%;
  } ;
`;

export const Logo = styled.img`
  @media (max-width: 500px) {
    height: 100%;
  } ;
`;

export const PageSearch = styled.section`
  width: 40%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-left: auto;
  @media (max-width: 800px) {
    padding: 0;
    width: 50%;
  }
  @media (max-width: 615px) {
    width: 80%;
    margin-top: 3%;
    margin-bottom: 3%;
    margin-left: 0;
  } ;
`;

export const Input = styled.input`
  width: 80%;
  height: 40px;
  padding-left: 20px;
  font-size: 15px;
  border-radius: 5px;
  background-color: ${function (props) {
    return props.theme.black.third;
  }};
  border: none;
`;

export const ButtonSearch = styled.button`
  width: 40px;
  height: 40px;
  border: 0;
  background-color: ${function (props) {
    return props.theme.yellow.primary;
  }};
  color: ${function (props) {
    return props.theme.black.primary;
  }};
  font-size: 20px;
  margin-left: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    transition-duration: 1s;
    cursor: pointer;
    border-color: ${function (props) {
      return props.theme.black.third;
    }};
    box-shadow: 0px -1px 21px 7px #5dd952;
  }
`;
