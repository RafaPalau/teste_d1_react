import React, { Component } from "react";
import jornadas from "../../services/jornadas";
import * as S from "./styled";

// Importação dos icones da lista
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

  // recebendo as informações dos indices da API ...services/jornadas.js
  async componentDidMount() {
    const response = await jornadas.get("");
    this.setState({ info: response.data });
  }

  render() {
    const { info } = this.state;

    // função para definir a imagem do icone conforma o texto do indice.
    // Não precisava mas não sei por que eu quis fazer.
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
