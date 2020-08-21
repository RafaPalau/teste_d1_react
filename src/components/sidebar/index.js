import React, { Component } from "react";
import * as S from "./style";
import chartIcon from '../../assets/icons/chart.png'
import rocketIcon from '../../assets/icons/rocket.png'
import groupIcon from '../../assets/icons/group.png'
import cloudIcon from '../../assets/icons/cloud.png'
import arrowSquareIcon from '../../assets/icons/arrowSquare.png'
import gemIcon from '../../assets/icons/gem.png'
import tollsIcon from '../../assets/icons/tools.png'
import arrowsIcon from '../../assets/icons/arrows.png'
import arrowCircleIcon from '../../assets/icons/arrowCircle.png'



class SideBar extends Component {
  render() {
    return (
      <>
        <S.Container> 
          <S.ChartIcon src={chartIcon} alt="" />
          <S.RocketIcon src={rocketIcon} alt="" />
          <S.GroupIco src={groupIcon} alt="" />
          <S.CloudIcon src={cloudIcon} alt="" />
          <S.Hr/>
          <S.ArrowSquareIcon src={arrowSquareIcon} alt="" />
          <S.GemIcon src={gemIcon} alt="" />
          <S.ToolsIcon src={tollsIcon} alt="" />
          <S.ArrowsIcon src={arrowsIcon} alt="" />
          <S.ArrowCircleIcon src={arrowCircleIcon} alt="" />
         
        </S.Container>
      </>
    );
  }
}

export default SideBar;
