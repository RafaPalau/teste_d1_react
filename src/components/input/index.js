import React, { Component } from "react";
import * as S from "./styles";
import search from '../../assets/icons/search.svg'

class Input extends Component {


  render() {
    function handleClick() {
      alert('Nova jornada')
    }

    return (
      <>
        <S.Container>


        <S.SearchIcon src={search} alt=""></S.SearchIcon>
          <S.Search placeholder="Buscar"> 
          
                    </S.Search>  


          <S.Button onClick={handleClick}>
            <S.Text>+ Nova Jornada</S.Text>
          </S.Button>


        </S.Container>
      </>
    );
  }
}

export default Input;
