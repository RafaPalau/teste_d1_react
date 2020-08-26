import styled from "styled-components";
import Gotham from "../../assets/fonts/Gotham-Book.ttf";

export const Main = styled.main`
  /* display: flex; */
  /* border: 1px solid red; */
  margin: 66px 30px auto 0px;
`;

// container principal
export const Container = styled.div`
  display: flex;
  
  /* border: 5px solid red; */
  background-color: #fafbff;
  list-style: none;
`;

// estilização do titulo
export const Titulos = styled.div`
  margin-left: 150px;
`;

export const Title = styled.h1`
  text-align: left;
  margin-left: -5px;
  font-family: ${Gotham};
  font-weight: bold;
  font-size: 16px;
  letter-spacing: 0;
  color: #3e4157;
 
`;

export const Icon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 123px;
  margin-top: 36px;
  margin-left: 90px;
`;

// Estilização dos indices
export const Indice = styled.div`
  margin-top: 20px;
  cursor: pointer;
`;

export const List = styled.li`
  display: flex;
  width: 133px;
`;

//Div Icons
export const DivIcons = styled.div`
  width: 16px;
  margin-top: 33px;
`;

// Div Indice e valor

export const Valor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 123px;
  margin-top: 34px;
  margin-left: -80px;
 
`;

export const Name = styled.h2`
  font-size: 13px;
  color: #9196ab;
  margin-left: -40px;
  &:hover {
    color: #117eff;
  }
`;

export const ValorIndice = styled.div`
  background: #e4e6f1;
  border: 1px solid #ebeef6;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  color: #9196ab;
  cursor: pointer;
  &:hover {
    background: #ebeef6;
  }
`;
