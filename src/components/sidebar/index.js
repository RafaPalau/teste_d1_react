import React, { Component } from "react";
import ReactTooltip from "react-tooltip";
import * as S from "./style";

// import ChartIcon from "./ChartIcon";
// import ToolIcon from "./ToolsIcon";

import rocketIcon from "../../assets/icons/rocket.svg";
import groupIcon from "../../assets/icons/user-friends.svg";
import cloudIcon from "../../assets/icons/ccm-cloud.svg";
import arrowSquareIcon from "../../assets/icons/external-link-alt-solid.svg";
import gemIcon from "../../assets/icons/gem.svg";
import tools from "../../assets/icons/tools.svg";
import arrowsIcon from "../../assets/icons/exchange-alt.svg";
import arrowCircleIcon from "../../assets/icons/sign-out-alt.svg";

// Função para ativar nova cor pro icone.
function getStyle(e) {
  e.target.classList.toggle("ativo");
  console.log(e.target);
}

class SideBar extends Component {
  render() {
    return (
      <>
        <ReactTooltip />

        <S.Container>

       
          <S.ChartIcon data-tip="Análises" data-type="light" data-place="right" />

          <S.RocketIcon
            src={rocketIcon}
            alt=""
            data-tip="Jornadas"
            data-type="light"
            data-place="right"
          />
          <S.GroupIco
            src={groupIcon}
            alt=""
            data-tip="Clientes"
            data-type="light"
            data-place="right"
          />
          <S.CloudIcon
            src={cloudIcon}
            alt=""
            data-tip="CCM Cloud"
            data-type="light"
            data-place="right"
          />
          <S.Hr />
          <S.ArrowSquareIcon
            src={arrowSquareIcon}
            alt=""
            data-tip="Versão 1"
            data-type="light"
            data-place="right"
          />
          <S.GemIcon
            src={gemIcon}
            alt=""
            data-tip="Administração"
            data-type="light"
            data-place="right"
          />
          <S.ToolsIcon
            onClick={getStyle}
            src={tools}
            data-tip="Help Desk"
            data-type="light"
            data-place="right"
          />

          <S.ArrowsIcon
            src={arrowsIcon}
            alt=""
            data-tip="Trocar Conta"
            data-type="light"
            data-place="right"
          />
          <S.ArrowCircleIcon
            src={arrowCircleIcon}
            alt=""
            data-tip="Sair"
            data-type="light"
            data-place="right"
          />
        </S.Container>
      </>
    );
  }
}

export default SideBar;
