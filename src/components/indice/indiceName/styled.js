import styled from "styled-components";
import GothamBook from "../../../assets/fonts/Gotham-Book.ttf";
import GothamBold from "../../../assets/fonts/Gotham-Bold.ttf";

//indices o Active tem que ir aqui.
export const Li = styled.h2`
  font-size: 13px;
  color: #9196ab;
  cursor: pointer;
  margin-bottom: 8px;

  margin-left: -60px;
  &:hover {
    color: #117eff;
  }
`;

// valores do indice
export const DivLista = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: -160px;
  margin-top:5px;
`;
export const DivTabela = styled.div`
  margin-left: 65px;
`;

//div principal que pega o indice e a tabela
export const Container = styled.ul`
  display: flex;
  margin-top: 11px;
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
  font-family: ${GothamBold};
  font-weight: bold;
  font-size: 13px;
`;

// div de cada destinatário
export const LiRecipients = styled.ul`
  margin-left: -60px;
  padding: 13px;
  display: flex;
  background-color: #ffffff;
  margin-bottom: 10px;
  align-items: center;
  justify-content: center;
  width: 160px;
  font-family: ${GothamBook};
  font-weight: normal;
  font-size: 13px;
`;

// div de cada successo
export const LiSuccess = styled.ul`
  display: flex;
  background-color: #ffffff;
  margin-bottom: 10px;
  width: 170px;
  padding: 13px;
  padding-left: 40px;
  margin-left: 0px;
  font-family: ${GothamBook};
  font-weight: normal;
  font-size: 13px;
`;

// div de cada status da tabela
export const DivStatus = styled.div`
  display: flex;
  background-color: #ffffff;
  margin-bottom: 10px;
  align-items: center;
  width: 160px;
  margin-left: -70px;
  font-family: ${GothamBook};
  font-weight: normal;
  font-size: 13px;
`;

export const Table = styled.div`
  display: flex;
  font-family: ${GothamBold};
  font-size: 14px/18px;
  font-weight: bold;
  color: #9196ab;
  margin-top: 8px;
  margin-bottom: 14px;
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
  font-family: ${GothamBold};
  font-size: 13px/18px;
  font-weight: bold;
  font-weight: bold;
  margin-left: 10px;
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  align-items: center;
  font-family: ${GothamBook};
  font-size: 13px/18px;
`;

// div container status
export const LiStatus = styled.ul`
  /* margin-top: -13px; */
  /* line-height: 15px; */
  font-family: ${GothamBook};
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
