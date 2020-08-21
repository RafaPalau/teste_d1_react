import React, { Component } from "react";

import * as S from "./styles";

class Tabela extends Component {
  render() {
    return (
      <S.Container>

       {/* Cabeçalho da tabela */}
        <S.DivHeader>
          <S.Name>Nome </S.Name>
          <S.Destinatario>Destinatário</S.Destinatario>
          <S.Sucesso> Sucesso </S.Sucesso>
          <S.Status> Status </S.Status>
        </S.DivHeader>



      </S.Container>
    );
  }
}

export default Tabela;
