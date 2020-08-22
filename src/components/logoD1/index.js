import React, { Component } from "react";
import * as S from "./style";
import logo from '../../assets/images/logotipo.png'

class Logo extends Component {
  render() {
    return <>
    <S.Container>
      <S.Img  src={logo}  alt="fireSpot"/>
      <S.Hr />
      </S.Container>
    </>;
  }
}

export default Logo;
