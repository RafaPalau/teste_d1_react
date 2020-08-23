import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top:0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const Modal = styled.div`
  background-color: #Fff;
  border-radius: 10px;
  width: 382px;
  height: 215px;
  margin: 80px auto 0 auto;
`

export const Container = styled.main`
display: flex;
flex-direction: column;
/* align-items: center; */
width: 381.89px;
height: 215px;
`
export const H1 = styled.h1`
margin-top: 25px;
margin-left: 31px;
font: normal normal bold 13px/14px Gotham;
letter-spacing: 0px;
color: #9196AB;
`

export const Hr = styled.hr`
border: 1px solid #E4E6F1;
width:321px;
`
export const Parag = styled.p`
margin: 25px auto auto 30px;
font: normal normal normal 13px/14px Gotham;
color: #3E4157;

`
export const Strong = styled.strong`
font: normal normal bold 13px/14px Gotham;
color:3E4157;
`
export const Input = styled.input`
margin: 5px auto auto auto;
width: 322px;
height: 33px;
background: #FFFFFF 0% 0% no-repeat padding-box;
border: 1px solid #CCCFDE;
border-radius: 5px;
padding: 5px;

cursor: pointer;
  outline-style: none;
  transition: all 0.3s ease;
  &:hover {
    box-shadow: 0px 0px 8px 2px #ccc;
  }
`

export const Parag2 = styled.p`
margin: 5px auto auto 30px;
font: normal normal normal 13px/19px Gotham;
letter-spacing: 0px;
color: #9196AB;
`

export const DivBotoes= styled.main`

display: flex;
`
export const BotaoContinuar = styled.p`
font: normal normal bold 13px/14px Gotham;
color: #117EFF;
margin-left: 112px;
margin-top: 25px;
margin-bottom: 26px;
cursor: pointer;
`
export const BotaoCancelar = styled.p`
font: normal normal bold 13px/14px Gotham;
color: #9196AB;
margin-left: 21px;
margin-top: 25px;
margin-bottom: 26px;
cursor: pointer;
`
