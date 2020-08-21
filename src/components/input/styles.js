import styled from "styled-components";

export const Container = styled.div`
  /* A margim que distancia as imagens dos inputs */
  margin-left: 500px;
  display: flex;
`;

export const Search = styled.input`
  background: #ffffff 0% 0% no-repeat padding-box;
  width: 296px;
  height: 35px;
  border-radius: 5px;
  border: 1px solid #cccfde;
  margin-right: 15px;
 
`;

export const SearchIcon = styled.img`
  width: 20px;
  height: 21px;
  filter: invert(60%) sepia(71%) saturate(6818%) hue-rotate(200deg)
    brightness(99%) contrast(104%);
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #117eff 0% 0% no-repeat padding-box;
  width: 150px;
  height: 35px;
  border: none;
  border-radius: 2px;

  
`;
export const Text = styled.p`
  font: normal normal bold 13px/14px Gotham;
  color: #ffffff;
`;
