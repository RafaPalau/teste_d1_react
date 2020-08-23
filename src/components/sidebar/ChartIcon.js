import React, { Component } from "react";
import ReactTooltip from "react-tooltip";
import styled from "styled-components";
import chartIcon from "../../assets/icons/chart.png";

const Icon = styled.img`
  width: 20px;
  height: 21px;
  filter: invert(100%) sepia(0%) saturate(2%) hue-rotate(11deg) brightness(200%)
    contrast(1000%);
  margin-top: 71px;
  &:hover {
    filter: invert(39%) sepia(23%) saturate(7090%) hue-rotate(200deg)
      brightness(100%) contrast(105%);
  }
`;

class ChartIcon extends Component {
  render() {
    return (
      <>
        <ReactTooltip />

        <Icon
          src={chartIcon}
          alt=""
          data-tip="Análises"
          data-type="light"
          data-place="right"
        />
      </>
    );
  }
}

export default ChartIcon;
