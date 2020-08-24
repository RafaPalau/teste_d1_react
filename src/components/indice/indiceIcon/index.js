import React, { Component } from "react";
import jornadas from "../../api/jornadas";
import * as S from "./styled";

import todosIcon from "../../../assets/icons/table.svg";
import emExecucaoIcon from "../../../assets/icons/paper-plane.svg";
import ativaIcon from "../../../assets/icons/play-circle.svg";
import configurandoIcon from "../../../assets/icons/pen.svg";
import ociosaIcon from "../../../assets/icons/bed.svg";
import concluidaIcon from "../../../assets/icons/check.svg";

class IndiceIcon extends Component {
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
      <S.Container>
        <S.Icon>{info.map((item) => getIndice(`${item.name}`))}</S.Icon>
      </S.Container>
    );
  }
}

export default IndiceIcon;
