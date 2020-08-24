import React, { Component } from "react";
import ReactTooltip from "react-tooltip";
import styled from "styled-components";
import chartIcon from "../../assets/icons/chart.png";
import analises from "../../assets/icons/analises.svg";

class ChartIcon extends Component {
  render() {
    return (
      <>
        <ReactTooltip />

        <Icon data-tip="Análises" data-type="light" data-place="right" />
      </>
    );
  }
}

const Icon = styled.div`
  width: 21px;
  height: 21px;
  background-image: url(${chartIcon});
  background-size: 21px;
  background-repeat: no-repeat;
  filter: invert(100%) sepia(0%) saturate(2%) hue-rotate(11deg) brightness(200%)
    contrast(1000%);
  margin-top: 71px;
  &:hover {
        filter: invert(39%) sepia(23%) saturate(7090%) hue-rotate(200deg)
      brightness(100%) contrast(105%);
    background-image: url(${analises});
  }
  
`;

export default ChartIcon;
