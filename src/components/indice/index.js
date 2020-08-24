import React, { Component } from "react";
import * as S from "./styles";

import IndiceName from "../indice/indiceName";
import IndiceValor from "../indice/indiceValor";
import IndiceIcon from "../indice/indiceIcon";

class Indice extends Component {
  render() {
    return (
      <>
        <S.Main>
          <S.Titulos>
            <S.Title>Jornadas</S.Title>
          </S.Titulos>

          <S.Container>
            <IndiceIcon></IndiceIcon>
            <IndiceName></IndiceName>
            <IndiceValor></IndiceValor>
          </S.Container>
        </S.Main>
      </>
    );
  }
}

export default Indice;
