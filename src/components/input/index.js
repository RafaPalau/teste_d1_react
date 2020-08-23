import React, { Component } from "react";
import Modal from "../modal/Modal";
import * as S from "./styles";
import search from "../../assets/icons/search.svg";

class Input extends Component {
  state = {
    show: false,
  };
  showModal = () => {
    this.setState({
      ...this.state,
      show: !this.state.show,
    });
  };

  render() {
    return (
      <>
        <S.Container>
          <S.SearchIcon src={search} alt=""></S.SearchIcon>
          <S.Search placeholder="Buscar"></S.Search>

          <S.Button onClick={this.showModal}>
            <S.Text>+ Nova Jornada</S.Text>
          </S.Button>

          <Modal onClose={this.showModal} show={this.state.show}>
           <h1> This msg is from modal</h1>
          </Modal>
        </S.Container>
      </>
    );
  }
}

export default Input;
