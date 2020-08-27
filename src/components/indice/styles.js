import styled from "styled-components";
import GothamBold from "../../assets/fonts/Gotham-Bold.ttf";

export const Main = styled.main`
  margin: 66px 30px auto 0px;

`;

// container principal
export const Container = styled.div`
  display: flex;
  background-color: #fafbff;
  list-style: none;
`;

// estilização do titulo
export const Titulos = styled.div`
  margin-left: 150px;
`;

// Título do indice Jornadas
export const Title = styled.h1`
  text-align: left;
  margin-left: -50px;
  font-family: ${GothamBold};
  font-weight: bold;
  font-size: 16px;
  letter-spacing: 0;
  color: #3e4157;
`;
