import React, { Component } from "react";
import jornadas from "../../services/jornadas";
import * as S from "./styled";

class IndiceValor extends Component {
  state = {
    info: [],
  };
  async componentDidMount() {
    const response = await jornadas.get("");
    this.setState({ info: response.data });
  }

  render() {
    const { info } = this.state;

    return (
      <S.Valor>
        {info.map((jornadas) => (
          <S.ValorIndice>{jornadas.quantity}</S.ValorIndice>
        ))}
      </S.Valor>
    );
  }
}

export default IndiceValor;
