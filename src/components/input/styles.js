import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  /* A margim que distancia as imagens dos inputs */
  margin-left: 500px;
  display: flex;
`;

export const Search = styled.input`
  background: #ffffff 0% 0% no-repeat padding-box;
  width: 296px;
  height: 35px;
  border-radius: 5px;
  color: #9196ab;
  border: 1px solid #cccfde;
  padding-left: 31.72px;
  cursor: pointer;
  &:hover{
  box-shadow: 0px 0px 8px 2px #CCC;
}
`;

export const SearchIcon = styled.img`
  width: 14px;
  height: 14px;
  filter: invert(60%) sepia(71%) saturate(6818%) hue-rotate(200deg)
    brightness(99%) contrast(104%);
  margin-right: -25px;
  margin-left: 25px;
  
 
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #117eff 0% 0% no-repeat padding-box;
  width: 150px;
  height: 35px;
  border: none;
  border-radius: 8px;
  margin-left: 15px;
&:hover{
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,225,255,1) 0%, rgba(17,126,255,1) 100%);
}
`;
export const Text = styled.p`
  font: normal normal bold 13px/14px Gotham;
  color: #ffffff;
`;
