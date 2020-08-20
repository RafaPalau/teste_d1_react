import React from "react";
import Indice from "./components/indice";
import Logo from "./components/logoD1";
import * as S from "./StyleApp";


function App() {
  return (
    <S.Container>

<Logo> </Logo>
      {/* <S.DivNav>
    AQui vai a logo D1 + imagens + input
      </S.DivNav>
  */}

{/* <S.DivMain>
Aqui vai o SideBAr + Indice + FullList
</S.DivMain> */}

      <Indice />

    </S.Container>
  );
}

export default App;
