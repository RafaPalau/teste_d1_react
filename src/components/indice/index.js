import React, { Component } from "react";
import jornadas from "../api/jornadas";
import * as S from "./styles";

import status1 from "../../assets/icons/table.svg";
import status2 from "../../assets/icons/paper-plane.svg";
import status3 from "../../assets/icons/play-circle.svg";
import status4 from "../../assets/icons/pen.svg";
import status5 from "../../assets/icons/bed.svg";
import status6 from "../../assets/icons/check.svg";

class Indice extends Component {
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

          <S.Titulos>
            <S.Title>Jornadas</S.Title>
          </S.Titulos>

      <S.Section>
          {/* Aqui vai os icones */}
          <S.DivIcons>
            <S.Status1 src={status1} alt="" />
            <S.Status2 src={status2} alt="" />
            <S.Status3 src={status3} alt="" />
            <S.Status4 src={status4} alt="" />
            <S.Status5 src={status5} alt="" />
            <S.Status6 src={status6} alt="" />
            {console.log(jornadas)}
          </S.DivIcons>

          <S.Indice>
            {info.map((jornadas) => (
              <S.List key={S.List}>
                <S.DivIndiceValor>
                  {/* Aqui vai os nomes dos indices */}
                  <S.Name>{jornadas.name}</S.Name>

                  {/* Aqui vai as quantidades dos indices */}
                  <S.ValorIndice>{jornadas.quantity}</S.ValorIndice>
                </S.DivIndiceValor>
              </S.List>
            ))}
          </S.Indice>

          </S.Section>
        </S.Container>
      </>
    );
  }
}

export default Indice;
