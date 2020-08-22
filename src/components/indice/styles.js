import styled from "styled-components";

export const Main = styled.main`
  display: inline-block;
  margin: 66px 130px auto 91px;
`;

// container principal
export const Container = styled.div`
  display: flex;

  background-color: #fafbff;
  list-style: none;
  /* margin top , right, bottom e left*/
`;

// estilização do titulo
export const Titulos = styled.div``;

export const Title = styled.h1`
  text-align: left;
  font: normal normal bold 16px/18px Gotham;
  letter-spacing: 0;
  color: #3e4157;
`;

export const Section = styled.section`
  display: flex;
  align-items: center;
`;

// Estilização dos indices
export const Indice = styled.div`
  margin-top: 20px;
  justify-items: center;
  cursor: pointer;
  &:hover {
  }
`;

export const List = styled.li`
  display: flex;
  width: 133px;
  justify-content: space-between;
`;

//Div Icons
export const DivIcons = styled.div`
  width: 16px;
  margin-top: 33px;
  justify-content: space-between;
`;

// Div Indice e valor

export const Valor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 123px;
  margin-top: 36px;
`;

export const Name = styled.h2`
  font-size: 13px;
  color: #9196ab;
  margin-left: 10px;
`;

export const ValorIndice = styled.div`
  background: #e4e6f1;
  border: 1px solid #ebeef6;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  text-align: center;
  margin-bottom: 10px;
  color: #9196ab;
  cursor: pointer;
`;

// Icones dos indices
export const Status1 = styled.img`
  width: 16px;
  height: 16px;
  filter: invert(88%) sepia(96%) saturate(7497%) hue-rotate(243deg)
    brightness(89%) contrast(93%);
`;
export const Status2 = styled.img`
  width: 16px;
  height: 16px;
  filter: invert(74%) sepia(7%) saturate(2487%) hue-rotate(25deg)
    brightness(96%) contrast(110%);
  margin-top: 15px;
`;
export const Status3 = styled.img`
  width: 16px;
  height: 16px;
  filter: invert(70%) sepia(11%) saturate(2482%) hue-rotate(87deg)
    brightness(88%) contrast(95%);
  margin-top: 15px;
`;
export const Status4 = styled.img`
  width: 16px;
  height: 16px;
  filter: invert(61%) sepia(21%) saturate(2057%) hue-rotate(178deg)
    brightness(95%) contrast(102%);
  margin-top: 16px;
`;
export const Status5 = styled.img`
  width: 16px;
  height: 16px;
  filter: invert(80%) sepia(45%) saturate(711%) hue-rotate(346deg)
    brightness(96%) contrast(92%);
  margin-top: 17px;
`;
export const Status6 = styled.img`
  width: 16px;
  height: 16px;
  filter: invert(80%) sepia(45%) saturate(711%) hue-rotate(346deg)
    brightness(96%) contrast(92%);
  margin-top: 15px;
`;
