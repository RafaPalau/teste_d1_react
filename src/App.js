import React from "react";


import Logo from "./components/logoD1";
import Title from "./components/titulo";
import Input from "./components/input";
import * as S from "./StyleApp";
import SideBar from "./components/sidebar";
import Indice from "./components/indice";
import Tabela from "./components/tabela";

function App() {
  return (
    <S.Container>
      <S.DivNav>
        <Logo> </Logo>
        <Title></Title>
        <Input></Input>
      </S.DivNav>

      <S.DivMain>
        <SideBar />
        <Indice />
             </S.DivMain>
    </S.Container>
  );
}

export default App;
