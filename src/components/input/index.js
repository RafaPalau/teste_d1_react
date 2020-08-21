import React, { Component } from "react";
import * as S from "./styles";

class Input extends Component {


  render() {
    function handleClick() {
      alert('Nova jornada')
    }

    return (
      <>
        <S.Container>
          <S.Search placeholder="Buscar"></S.Search>

          <S.Button onClick={handleClick}>
            <S.Text>+ Nova Jornada</S.Text>
          </S.Button>
        </S.Container>
      </>
    );
  }
}

export default Input;
