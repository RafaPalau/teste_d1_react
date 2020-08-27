import React, { Component } from "react";
import * as S from "./styles";
import ReactTooltip from "react-tooltip";
import logo from "../../assets/images/acme-logo.png";

class Title extends Component {
  render() {
    return (
      // Inicio do container principal
      <S.Container>
        <ReactTooltip />
        <S.BackGroundA
          data-tip="Antonio Silva"
          data-type="dark"
          data-place="right"
        >
          A
        </S.BackGroundA>

        <S.AcmeLogo src={logo} alt="fireSpot" />
      </S.Container>
      // Fim do container principal
    );
  }
}

export default Title;
