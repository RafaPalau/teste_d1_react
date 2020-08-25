import React, { Component } from "react";
import ReactTooltip from "react-tooltip";
import styled from "styled-components";
import chartIcon from "../../assets/icons/chart-pie.svg";
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
  width: 20px;
  height: 21px;
  background-image: url(${chartIcon});
  background-size: 21px;
  background-repeat: no-repeat;
  margin-top: 71px;
  filter: invert(48%) sepia(1%) saturate(100%) hue-rotate(100deg)
    brightness(200%) contrast(400%);
  
  &:hover {
        filter: invert(39%) sepia(23%) saturate(7090%) hue-rotate(200deg)
      brightness(100%) contrast(105%);
    background-image: url(${analises});
  }
  
`;

export default ChartIcon;
