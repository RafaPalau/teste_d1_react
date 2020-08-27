import styled from "styled-components";
import GothamBook from "../../assets/fonts/Gotham-Book.ttf";

//Container principal da imagem A e Acme
export const Container = styled.div`
  display: flex;
  align-items: center;
  widows: 129px;
  height: 36px;
  @media (max-width: 1200px) {
    margin-left: -80px;
  }
`;

//Imagem A
export const BackGroundA = styled.div`
  background: #117eff;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  color: #f7f7f7;
  opacity: 1;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
  margin-left: 95px;
  font-family: ${GothamBook};
  font-size: 14px/18px;
  font-weight: bold;
  color: #ffffff;
`;

//Imagem Acme
export const AcmeLogo = styled.img`
  width: 66px;
  height: 26px;
  margin-left: 34px;
  background-color: #fff;
`;
