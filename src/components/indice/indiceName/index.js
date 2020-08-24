import React, { Component } from "react";
import * as S from "./styled";

class IndiceName extends Component {
  render() {  

    return (
      <S.Container >
        <S.Li >Todos</S.Li>
        <S.Li>Em execução</S.Li>
        <S.Li>Ativa</S.Li>
        <S.Li>Configurando</S.Li>
        <S.Li>Ociosa</S.Li>
        <S.Li>Concluída</S.Li>
      </S.Container>
    );
  }
}

export default IndiceName;
