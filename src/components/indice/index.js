import React, { Component } from "react";
import jornadas from "../api/jornadas";
import * as S from "./styles";

import todosIcon from "../../assets/icons/table.svg";
import emExecucaoIcon from "../../assets/icons/paper-plane.svg";
import ativaIcon from "../../assets/icons/play-circle.svg";
import configurandoIcon from "../../assets/icons/pen.svg";
import ociosaIcon from "../../assets/icons/bed.svg";
import concluidaIcon from "../../assets/icons/check.svg";

class Indice extends Component {
  state = {
    info: [],
  };
  async componentDidMount() {
    const response = await jornadas.get("");
    this.setState({ info: response.data });
  }

  render() {
    const { info } = this.state;

    function getIndice(item) {
      if (item === "Todos") {
        return <S.ImgTodos src={todosIcon} />;
      } else if (item === "Em execução") {
        return <S.ImgExExecucao src={emExecucaoIcon} />;
      } else if (item === "Ativa") {
        return <S.ImgAtiva src={ativaIcon} />;
      } else if (item === "Configurando") {
        return <S.ImgConfigurando src={configurandoIcon} />;
      } else if (item === "Ociosa") {
        return <S.ImgOciosa src={ociosaIcon} />;
      } else if (item === "Concluída") {
        return <S.ImgConcluida src={concluidaIcon} />;
      }
    }

    return (
      <>
        <S.Main>
          <S.Titulos>
            <S.Title>Jornadas</S.Title>
          </S.Titulos>

          <S.Container>
            {/* Icones do indice mapeados e renderizados pela função getIndice */}
            <S.Icon>{info.map((item) => getIndice(item.name))}</S.Icon>

            <S.Indice>
              {info.map((jornadas) => (
                <S.List key={S.List}>
                  <S.Name>{jornadas.name}</S.Name>
                </S.List>
              ))}
            </S.Indice>

            <S.Valor>
              {info.map((jornadas) => (
                <S.ValorIndice key={S.Indice}>
                  {jornadas.quantity}
                </S.ValorIndice>
              ))}
            </S.Valor>
          </S.Container>
        </S.Main>
      </>
    );
  }
}

export default Indice;
