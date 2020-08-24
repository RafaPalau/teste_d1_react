import styled from "styled-components";
import Gotham from '../../assets/fonts/Gotham-Book.ttf'

export const Main = styled.main`
  display: inline-block;
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

export const Title = styled.h1`
  text-align: left;
  margin-left: -5px;
  font-family: ${Gotham};
  font-weight: bold;
  font-size: 16px;
  letter-spacing: 0;
  color: #3e4157;

  /* margin-left: 90px; */
`;

export const Section = styled.section`
  display: flex;
  align-items: center;
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

// Estilização dos icones do Indice.
// Tentar colocar num arquivo separado pra reutilizar na tabela

// export const ImgTodos = styled.img`
//   width: 16px;
//   height: 16px;
//   filter: invert(85%) sepia(42%) saturate(2840%) hue-rotate(207deg)
//     brightness(92%) contrast(87%);
//   margin-top: -5px;
// `;
// export const ImgExExecucao = styled.img`
//   width: 16px;
//   height: 16px;
//   filter: invert(74%) sepia(7%) saturate(2487%) hue-rotate(25deg)
//     brightness(96%) contrast(110%);
//   margin-top: 20px;
// `;
// export const ImgAtiva = styled.img`
//   width: 16px;
//   height: 16px;
//   filter: invert(70%) sepia(11%) saturate(2482%) hue-rotate(87deg)
//     brightness(88%) contrast(95%);
//   margin-top: 20px;
// `;
// export const ImgConfigurando = styled.img`
//   width: 16px;
//   height: 16px;
//   filter: invert(61%) sepia(21%) saturate(2057%) hue-rotate(178deg)
//     brightness(95%) contrast(102%);
//   margin-top: 19px;
// `;
// export const ImgOciosa = styled.img`
//   width: 16px;
//   height: 16px;
//   filter: invert(80%) sepia(45%) saturate(711%) hue-rotate(346deg)
//     brightness(96%) contrast(92%);
//   margin-top: 19px;
// `;
// export const ImgConcluida = styled.img`
//   width: 16px;
//   height: 16px;
//   filter: invert(73%) sepia(36%) saturate(347%) hue-rotate(192deg)
//     brightness(90%) contrast(84%);
//   margin-top: 19px;
// `;
