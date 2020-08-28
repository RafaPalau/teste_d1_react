import styled from "styled-components";
import analises from "../../assets/icons/analises.svg";
import chartIcon from "../../assets/icons/chart-pie.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1a1731;
  width: 71px;
  height: 697px;
`;

export const ChartIcon = styled.div`
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

export const RocketIcon = styled.img`
  width: 20px;
  height: 21px;
  filter: invert(48%) sepia(1%) saturate(100%) hue-rotate(100deg)
    brightness(200%) contrast(400%);
  margin-top: 24px;

  &:hover {
    filter: invert(39%) sepia(23%) saturate(7090%) hue-rotate(200deg)
      brightness(100%) contrast(105%);
  }
`;
export const GroupIco = styled.img`
  width: 20px;
  height: 21px;
  filter: invert(48%) sepia(1%) saturate(100%) hue-rotate(100deg)
    brightness(200%) contrast(400%);
  margin-top: 28px;

  &:hover {
    filter: invert(39%) sepia(23%) saturate(7090%) hue-rotate(200deg)
      brightness(100%) contrast(105%);
  }
`;
export const CloudIcon = styled.img`
  width: 20px;
  height: 21px;
  filter: invert(48%) sepia(1%) saturate(100%) hue-rotate(100deg)
    brightness(200%) contrast(400%);
  margin-top: 31.37px;

  &:hover {
    filter: invert(39%) sepia(23%) saturate(7090%) hue-rotate(200deg)
      brightness(100%) contrast(105%);
  }
`;
export const Hr = styled.hr`
  margin-top: 21px;
  width: 21px;
  height: 1px;
  background: transparent linear-gradient(90deg, #00e1ff 0%, #117eff 100%) 0% 0%
    no-repeat padding-box;
  border: none;

  &:hover {
    filter: invert(39%) sepia(23%) saturate(7090%) hue-rotate(200deg)
      brightness(100%) contrast(105%);
  }
`;

export const ArrowSquareIcon = styled.img`
  width: 20px;
  height: 21px;
  filter: invert(48%) sepia(1%) saturate(100%) hue-rotate(100deg)
    brightness(200%) contrast(400%);
  margin-top: 24px;

  &:hover {
    filter: invert(39%) sepia(23%) saturate(7090%) hue-rotate(200deg)
      brightness(100%) contrast(105%);
  }
`;
export const GemIcon = styled.img`
  width: 20px;
  height: 21px;
  filter: invert(48%) sepia(1%) saturate(100%) hue-rotate(100deg)
    brightness(200%) contrast(400%);
  margin-top: 200px;

  &:hover {
    filter: invert(39%) sepia(23%) saturate(7090%) hue-rotate(200deg)
      brightness(100%) contrast(105%);
  }
`;
export const ToolsIcon = styled.img`
  width: 20px;
  height: 21px;
  filter: invert(48%) sepia(1%) saturate(100%) hue-rotate(100deg)
    brightness(200%) contrast(400%);
  margin-top: 19px;
  cursor: pointer;
  &:hover {
    filter: invert(39%) sepia(23%) saturate(7090%) hue-rotate(200deg)
      brightness(100%) contrast(105%);
  }
  &.ativo {
    filter: invert(39%) sepia(23%) saturate(7090%) hue-rotate(200deg)
      brightness(100%) contrast(105%);
  }
`;
export const ArrowsIcon = styled.img`
  width: 20px;
  height: 21px;
  filter: invert(48%) sepia(1%) saturate(100%) hue-rotate(100deg)
    brightness(200%) contrast(400%);
  margin-top: 23px;

  &:hover {
    filter: invert(39%) sepia(23%) saturate(7090%) hue-rotate(200deg)
      brightness(100%) contrast(105%);
  }
`;
export const ArrowCircleIcon = styled.img`
  width: 20px;
  height: 21px;
  filter: invert(48%) sepia(1%) saturate(100%) hue-rotate(100deg)
    brightness(200%) contrast(400%);
  margin-top: 23px;

  &:hover {
    filter: invert(39%) sepia(23%) saturate(7090%) hue-rotate(200deg)
      brightness(100%) contrast(105%);
  }
`;
