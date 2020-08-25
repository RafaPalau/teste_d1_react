import React, { Component, useState, useEffect } from "react";
import * as S from "./styled";

function IndiceName(props) {
  const [indice, setindice] = useState(props.indice);

  useEffect(() => {});

  function getName(e) {
    if (e.target.innerText === "Todos") {
      var numStatus = "";
    } else if (e.target.innerText === "Em execução") {
      var numStatus = 1;
    } else if (e.target.innerText === "Ativa") {
      var numStatus = 2;
    } else if (e.target.innerText === "Configurando") {
      var numStatus = 3;
    } else if (e.target.innerText === "Ociosa") {
      var numStatus = 4;
    } else if (e.target.innerText === "Concluída") {
      var numStatus = 5;
    }
    setindice(numStatus);
  }

  return (
    <S.Container onClick={getName}>
      <S.Li>Todos</S.Li>
      <S.Li>Em execução</S.Li>
      <S.Li>Ativa</S.Li>
      {console.log(indice)}
      <S.Li>Configurando</S.Li>
      <S.Li>Ociosa</S.Li>
      <S.Li>Concluída</S.Li>
    </S.Container>
  );
}

export default IndiceName;
