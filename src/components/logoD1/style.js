import styled from "styled-components";

export const Img = styled.img`
  color: #fff;
  opacity: 1;
  width: 34px;
  height: 20px;
  z-index: 2;
  position: absolute;
  margin-left: 20px;
`;

export const Container = styled.div`
  background-color: #1a1731;
  display: flex;

  align-items: center;
  width: 71px;
  height: 71px; /* trocar o tamanho depois que arrumar os components */
`;

export const Hr = styled.hr`
  position: relative;
  z-index: 99;
  width: 30px;
  height: 2px;
  margin-right: 15px;
  background: transparent linear-gradient(90deg, #00e1ff 0%, #117eff 100%) 0% 0%
    no-repeat padding-box;
  border: none;
  cursor: pointer;

  &:hover {
    filter: invert(39%) sepia(23%) saturate(7090%) hue-rotate(200deg)
      brightness(100%) contrast(105%);
  }
`;


