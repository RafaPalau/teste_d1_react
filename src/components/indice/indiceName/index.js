import React, { Component } from "react";
import jornadas from "../../api/jornadas";
import * as S from "./styled";

class IndiceName extends Component {
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
      <S.Container>
        {info.map((jornadas) => (
          <S.Name>{jornadas.name}</S.Name>
        ))}
      </S.Container>
    );
  }
}

export default IndiceName;
