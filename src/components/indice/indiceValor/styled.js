import styled from "styled-components";

export const Valor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 123px;
  margin-top: 30px;
  /* margin-left: 17px; */
`;

export const ValorIndice = styled.div`
  background: #e4e6f1;
  border: 1px solid #ebeef6;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  margin-bottom: 11px;
  color: #9196ab;
  cursor: pointer;
  &:hover {
    background: #ebeef6;
  }
`;
