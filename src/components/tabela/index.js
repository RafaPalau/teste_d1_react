import React, { Component } from "react";
import * as S from "./styles";
import filtro from "../api/tabela";

class Tabela extends Component {
  state = {
    info: [],
  };

  async componentDidMount() {
    const response = await filtro.get("");
    this.setState({ info: response.data });
  }

  render() {
    const { info } = this.state;

    return (
      <S.Container>


        {/* Cabeçalho da tabela */}
        <S.Table> 
          <S.TdNome>Nome</S.TdNome>
          <S.TdDestinatario>Destinatário</S.TdDestinatario>
          <S.TdSucesso>Sucesso</S.TdSucesso>
          <S.TdStatus>Status</S.TdStatus>
        </S.Table>

      
         
          <S.DivName>
            {info.map((filtro) => (
              <S.Ul>
                <S.LiName>{filtro.name}</S.LiName>
                <S.LiRecipients>{filtro.recipients}</S.LiRecipients>
                <S.LiSuccess>{filtro.success}</S.LiSuccess>
                <S.LiStatus>{filtro.status}</S.LiStatus>
                {console.log(filtro.status)}
              </S.Ul>
            ))}
          </S.DivName>

      
      </S.Container>
    );
  }
}

export default Tabela;
