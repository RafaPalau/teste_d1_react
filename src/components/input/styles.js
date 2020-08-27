import styled from "styled-components";
import GothamBold from "../../assets/fonts/Gotham-Bold.ttf";
import GothamBook from "../../assets/fonts/Gotham-Book.ttf";


//Container principal do input e do botão
export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-left: 500px;
  display: flex;
`;
// input 
export const Search = styled.input`
  background: #ffffff 0% 0% no-repeat padding-box;
  width: 296px;
  height: 35px;
  border-radius: 5px;
  color: #9196ab;
  border: 1px solid #cccfde;
  padding-left: 31.72px;
  cursor: pointer;
  outline-style: none;
  transition: all 0.3s ease;
  &:hover {
    box-shadow: 0px 0px 8px 2px #ccc;
  }
  @media (max-width: 800px) {
    width: 200px;
  }
`;

// Icone dentro do Input
export const SearchIcon = styled.img`
  width: 14px;
  height: 14px;
  filter: invert(60%) sepia(71%) saturate(6818%) hue-rotate(200deg)
    brightness(99%) contrast(104%);
  margin-right: -25px;
  margin-left: 25px;
`;

//Botão Nova Jornada
export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #117ef6 ;
  width: 150px;
  height: 35px;
  border: none;
  outline-style: none;
  border-radius: 8px;
  margin-left: 15px;
  transition: all 0.5s ease;
  &:hover {
    background: linear-gradient(
      90deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(0, 225, 255, 1) 0%,
      rgba(17, 126, 255, 1) 100%
    );
  }
`;
// Texto dentro do botão
export const NovaJornada = styled.p`
  font-family: ${GothamBold};
  font-size: 13px/14px;
  font-weight: bold;
  color: #ffffff;
  margin-left: 5px;
  margin-right: 20.35px;
`;

// sinal de + dentro do botão
export const Mais = styled.p`
  font-family: ${GothamBook};
  font-size: 13px/14px;
  font-weight: normal;
  color: #ffffff;
`;
