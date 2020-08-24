import styled from "styled-components";
import Gotham from "../../assets/fonts/Gotham-Book.ttf";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(26, 23, 49, .6);
`;

export const Modal = styled.div`
  background-color: #fff;
  border-radius: 10px;
  width: 382px;
  height: 215px;
  margin: 80px auto 0 auto;
`;

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 381.89px;
  height: 215px;
`;
export const H1 = styled.h1`
  margin-top: 25px;
  margin-left: 31px;
  font-family: ${Gotham};
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 0px;
  color: #9196ab;
`;

export const Hr = styled.hr`
  border: 1px solid #e4e6f1;
  width: 321px;
`;
export const Parag = styled.p`
  margin: 18px auto auto 30px;
  font-family: ${Gotham};
  font-size: 13px;
  font-weight: normal;
  color: #3e4157;
`;
export const Strong = styled.strong`
  font-family: ${Gotham};
  font-size: 13px;
  font-weight: bold;
  color: 3e4157;
`;
export const Input = styled.input`
  margin: 5px auto auto auto;
  width: 322px;
  height: 33px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #cccfde;
  border-radius: 5px;
  padding: 5px;

  cursor: pointer;
  outline-style: none;
  transition: all 0.3s ease;
  &:hover {
    box-shadow: 0px 0px 8px 2px #ccc;
  }
`;

export const Parag2 = styled.p`
  margin: 5px auto auto 30px;
  font-family: ${Gotham};
  font-size: 13px;
  font-weight: normal;
  letter-spacing: 0px;
  color: #9196ab;
`;

export const DivBotoes = styled.main`
  display: flex;
`;
export const BotaoContinuar = styled.p`
  font-family: ${Gotham};
  font-size: 13px;
  font-weight: bold;
  color: #117eff;
  margin-left: 112px;
  margin-top: 25px;
  margin-bottom: 26px;
  cursor: pointer;
`;
export const BotaoCancelar = styled.p`
  font-family: ${Gotham};
  font-size: 13px;
  font-weight: bold;
  color: #9196ab;
  margin-left: 21px;
  margin-top: 25px;
  margin-bottom: 26px;
  cursor: pointer;
`;
