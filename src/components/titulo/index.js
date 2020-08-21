import React, { Component } from "react";
import * as S from "./styles";
import logo from "../../assets/images/acme-logo.png";

class Title extends Component {
  render() {
    return (
      <>
        <S.Container>

          
          <S.BackGroundA>A</S.BackGroundA>

          <S.AcmeLogo src={logo} alt="fireSpot" />


        </S.Container>
      </>
    );
  }
}

export default Title;
