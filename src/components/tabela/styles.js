import styled from "styled-components";

export const Container = styled.div``;

export const Table = styled.div`
  display: flex;
  font: normal normal normal 13px/14px Gotham;
  color: #9196ab;
`;
export const TdNome = styled.div`
  margin-left: 80px;
`;
export const TdDestinatario = styled.div`
  margin-left: 271px;
`;
export const TdSucesso = styled.div`
  margin-left: 110px;
`;
export const TdStatus = styled.div`
  margin-left: 80px;
`;

export const DivName = styled.div`
  display: flex;
  flex-direction: row;
  list-style: none;
  font: normal normal bold 13px/14px Gotham;
`;

export const DivMain = styled.div`
  /* display: flex; */
`;

export const Ul = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  height: 45px;
  background: #ffffff 0% 0% no-repeat padding-box;
  font: normal normal normal 13px/19px Gotham;
`;

export const UlStatus = styled.ul`
  list-style: none;
  font: normal normal bold 13px/14px Gotham;
`;

export const DivStatus = styled.div`
  display: flex;
  background-color: #ffffff;
  margin: 13px;
  align-items: center;
`;

export const LiName = styled.ul`
  width: 176px;
  height: 14px;
  text-align: left;
  color: #3e4157;
  font: normal normal bold 13px/14px Gotham;
`;
export const LiRecipients = styled.ul`
  width: 72px;
  height: 14px;
  text-align: center;
  background: #ffffff 0% 0% no-repeat padding-box;
  font: normal normal normal 13px/19px Gotham;
  color: #3e4157;
  margin-left: 101px;
`;
export const LiSuccess = styled.ul`
  width: 28px;
  height: 14px;
  text-align: center;
  background: #ffffff 0% 0% no-repeat padding-box;
  font: normal normal normal 13px/19px Gotham;
  color: #3e4157;
  margin-left: 91px;
`;
export const LiStatus = styled.ul`
  margin-top: -10px;
  font: normal normal normal 13px/19px Gotham;
  color: #3e4157;
`;

// Estilização dos icones do Tabela. 
// Tentar colocar num arquivo separado pra reutilizar na Indice
export const ImgEnviado = styled.img`
  width: 16px;
  height: 16px;
  filter: invert(78%) sepia(83%) saturate(307%) hue-rotate(10deg) brightness(84%) contrast(95%);
`;
export const ImgAtivadas = styled.img`
  width: 16px;
  height: 16px;
  filter: invert(70%) sepia(11%) saturate(2482%) hue-rotate(87deg)
    brightness(88%) contrast(95%);
`;
export const ImgConfigurando = styled.img`
  width: 16px;
  height: 16px;
  filter: invert(61%) sepia(21%) saturate(2057%) hue-rotate(178deg)
    brightness(95%) contrast(102%);
`;
export const ImgOciosa = styled.img`
  width: 16px;
  height: 16px;
  filter: invert(80%) sepia(45%) saturate(711%) hue-rotate(346deg)
    brightness(96%) contrast(92%);
`;
export const ImgCheck = styled.img`
  width: 16px;
  height: 16px;
  filter: invert(73%) sepia(36%) saturate(347%) hue-rotate(192deg)
    brightness(90%) contrast(84%);
`;
