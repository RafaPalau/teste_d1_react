import styled from "styled-components";
import Gotham from "../../../assets/fonts/Gotham-Book.ttf";

// Active tem que ir aqui.
export const Li = styled.h2`
  font-size: 13px;
  color: #9196ab;
  cursor: pointer;
  &:hover {
    color: #117eff;
  }
`;

// lista indice + tabela Aqui esta a gambiarra que preciso arrumar
export const DivLista = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  margin-left: -220px;
`;
export const DivTabela = styled.div`
  /* margin-left: 90px; */
`;

//div principal que pega o indice e a tabela
export const Container = styled.ul`
  display: flex;
`;

// div de cada nome
export const LiName = styled.ul`
  padding: 13px;
  width: 240px;
  display: flex;
  background-color: #ffffff;
  margin-bottom: 10px;
  align-items: center;

  margin-left: 63px;
`;

// div de cada destinatário
export const LiRecipients = styled.ul`
  margin-left: -40px;
  padding: 13px;
  display: flex;
  background-color: #ffffff;
  margin-bottom: 10px;
  align-items: center;
  width: 150px;
`;

// div de cada successo
export const LiSuccess = styled.ul`
  display: flex;
  background-color: #ffffff;
  margin-bottom: 10px;
  align-items: center;
  width: 150px;

  padding: 13px;
  margin-left: -15px;
`;

// div de cada status da tabela
export const DivStatus = styled.div`
  display: flex;
  background-color: #ffffff;
  margin-bottom: 10px;
  align-items: center;
  width: 150px;
  margin-left: -70px;
`;

export const Table = styled.div`
  display: flex;
  font: normal normal normal 13px/14px Gotham;
  color: #9196ab;
  margin-top: -15px;
`;
export const TdNome = styled.div`
  margin-left: 166px;
`;
export const TdDestinatario = styled.div`
  margin-left: 221px;
`;
export const TdSucesso = styled.div`
  margin-left: 73px;
`;
export const TdStatus = styled.div`
  margin-left: 73px;
`;

// div container com os valores de tabela
export const DivName = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  font-family: ${Gotham};
  font-size: 13px;
  font-weight: bold;
  margin-left: 10px;
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  align-items: center;
  font-family: ${Gotham};
  font-size: 13px;
`;

// div container status
export const LiStatus = styled.ul`
  /* margin-top: -13px; */
  /* line-height: 15px; */
  font-family: ${Gotham};
  font-weight: normal;
  font-size: 13px;
  color: #3e4157;
  padding: 0%;
`;

// Estilização dos icones do Tabela.
// Tentar colocar num arquivo separado pra reutilizar na Indice
export const ImgEnviado = styled.img`
  width: 16px;
  height: 16px;
  filter: invert(78%) sepia(83%) saturate(307%) hue-rotate(10deg)
    brightness(84%) contrast(95%);
  margin-right: 8px;
`;
export const ImgAtivadas = styled.img`
  width: 16px;
  height: 16px;
  filter: invert(70%) sepia(11%) saturate(2482%) hue-rotate(87deg)
    brightness(88%) contrast(95%);
  margin-right: 8px;
`;
export const ImgConfigurando = styled.img`
  width: 16px;
  height: 16px;
  filter: invert(61%) sepia(21%) saturate(2057%) hue-rotate(178deg)
    brightness(95%) contrast(102%);
  margin-right: 8px;
`;
export const ImgOciosa = styled.img`
  width: 16px;
  height: 16px;
  filter: invert(80%) sepia(45%) saturate(711%) hue-rotate(346deg)
    brightness(96%) contrast(92%);
  margin-right: 8px;
`;
export const ImgCheck = styled.img`
  width: 16px;
  height: 16px;
  filter: invert(73%) sepia(36%) saturate(347%) hue-rotate(192deg)
    brightness(90%) contrast(84%);
  margin-right: 8px;
`;

export const Icon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 123px;
  margin-top: 31px;
  /* margin-left: 90px; */
`;

export const ImgTodos = styled.img`
  width: 16px;
  height: 16px;
  filter: invert(85%) sepia(42%) saturate(2840%) hue-rotate(207deg)
    brightness(92%) contrast(87%);
`;
export const ImgExExecucao = styled.img`
  width: 16px;
  height: 16px;
  filter: invert(74%) sepia(7%) saturate(2487%) hue-rotate(25deg)
    brightness(96%) contrast(110%);
  margin-top: 19px;
`;
export const ImgAtiva = styled.img`
  width: 16px;
  height: 16px;
  filter: invert(70%) sepia(11%) saturate(2482%) hue-rotate(87deg)
    brightness(88%) contrast(95%);
  margin-top: 20px;
`;

export const ImgConcluida = styled.img`
  width: 16px;
  height: 16px;
  filter: invert(73%) sepia(36%) saturate(347%) hue-rotate(192deg)
    brightness(90%) contrast(84%);
  margin-top: 19px;
`;
