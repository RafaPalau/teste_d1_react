import React, { Component } from "react";
import * as S from "./styles";
import filtro from "../api/tabela";

import enviadoIcon from "../../assets/icons/paper-plane.svg";
import ativadasIcon from "../../assets/icons/play-circle.svg";
import configurandoIcon from "../../assets/icons/pen.svg";
import ociosaIcon from "../../assets/icons/bed.svg";
import concluidaIcon from "../../assets/icons/check.svg";

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

    function getStatusName(item) {
      if (item === 1) {
        return (
          <S.DivStatus>
            <S.ImgEnviado src={enviadoIcon} />
            <p>Enviada</p>
          </S.DivStatus>
        );
      } else if (item === 2) {
        return (
          <S.DivStatus>
            <S.ImgAtivadas src={ativadasIcon} />
            <p>Ativadas</p>
          </S.DivStatus>
        );
      } else if (item === 3) {
        return (
          <S.DivStatus>
            <S.ImgConfigurando src={configurandoIcon} />
            <p>Configurando</p>
          </S.DivStatus>
        );
      } else if (item === 4) {
        return (
          <S.DivStatus>
            <S.ImgOciosa src={ociosaIcon} />
            <p>Ociosa</p>
          </S.DivStatus>
        );
      } else if (item === 5) {
        return (
          <S.DivStatus>
            <S.ImgCheck src={concluidaIcon} />
            <p>Concluída</p>
          </S.DivStatus>
        );
      }
    }

    return (
      <S.Container>
        {/* Cabeçalho da tabela */}
        <S.Table>
          <S.TdNome>Nome</S.TdNome>
          <S.TdDestinatario>Destinatário</S.TdDestinatario>
          <S.TdSucesso>Sucesso</S.TdSucesso>
          <S.TdStatus>Status</S.TdStatus>
        </S.Table>

        {/* {info.map((item) => getStatusName(item.status))} */}

        <S.DivName>
          <S.DivMain>

            
          {info.map((filtro) => (
            <S.Ul>
              <S.LiName>{filtro.name}</S.LiName>
              <S.LiRecipients>{filtro.recipients}</S.LiRecipients>
              <S.LiSuccess>{filtro.success}</S.LiSuccess>
            </S.Ul>
          ))}
          </S.DivMain>
          <S.UlStatus>
            <S.LiStatus>
              {" "}
              {info.map((item) => getStatusName(item.status))}
            </S.LiStatus>
          </S.UlStatus>
        </S.DivName>
      </S.Container>
    );
  }
}

export default Tabela;
