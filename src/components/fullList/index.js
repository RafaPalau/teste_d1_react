import React, { Component } from "react";
import jornadas from "../api/jornadas";
import * as S from "./styles";


class FullList extends Component {
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
      <>
        <S.Container>

          
          {/* Listando os itens da jornada
          <S.H1>Jornadas</S.H1>

          {info.map((jornadas) => (
            <S.List key={jornadas}>
             
               
                <S.Name>{jornadas.name} </S.Name>
                <S.Quantidade>{jornadas.quantity}</S.Quantidade>
             
            </S.List>
          ))} */}
        </S.Container>
      </>
    );
  }
}

export default FullList;
