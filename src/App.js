import React from "react";

import Logo from "./components/logoD1";
import Title from "./components/titulo";
import Input from "./components/input";
import * as S from "./StyleApp";
import SideBar from "./components/sidebar";
import Indice from "./components/indice";
import FullList from "./components/fullList";

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
        <FullList />
      </S.DivMain>
    </S.Container>
  );
}

export default App;
