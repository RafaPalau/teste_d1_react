import styled from "styled-components";

// div com os valores dos indices vindos da API
export const Valor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 123px;
  margin-top: 24px;
  margin-left: 17px;
  cursor: pointer;
`;

export const ValorIndice = styled.div`
  background: #e4e6f1;
  border: 1px solid #ebeef6;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
  color: #9196ab;
  cursor: pointer;
  &:hover {
    background: #ebeef6;
  }
`;
