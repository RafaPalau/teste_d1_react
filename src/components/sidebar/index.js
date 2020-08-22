import React, { Component } from "react";
import ReactTooltip from "react-tooltip";
import * as S from "./style";

import chartIcon from "../../assets/icons/chart.png";
import rocketIcon from "../../assets/icons/rocket.png";
import groupIcon from "../../assets/icons/group.png";
import cloudIcon from "../../assets/icons/cloud.png";
import arrowSquareIcon from "../../assets/icons/arrowSquare.png";
import gemIcon from "../../assets/icons/gem.png";
import tollsIcon from "../../assets/icons/tools.png";
import arrowsIcon from "../../assets/icons/arrows.png";
import arrowCircleIcon from "../../assets/icons/arrowCircle.png";

class SideBar extends Component {
  render() {

    return (

      
      <>
        <ReactTooltip />
        <S.Container>
          <S.ChartIcon
            src={chartIcon}
            alt=""
            data-tip="Análises"
            data-type="light"
            data-place="right"
          />

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
            src={tollsIcon}
            alt=""
            data-tip="Help Deks"
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
