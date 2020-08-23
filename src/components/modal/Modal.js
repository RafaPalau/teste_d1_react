import React from "react";
import ReactDom from "react-dom";
import * as S from "./styles";

const portalRoot = document.getElementById("portal-root");

export default class Modal extends React.Component {
  onClose = (e) => {
    this.props.onClose && this.props.onClose(e);
  };
  render() {
    if (this.props.show) {
      return null;
    }
    return ReactDom.createPortal(
      <S.Overlay>
        <S.Modal>
          {this.props.children}

          {/*Inicio de toda a caixa do modal fica aqui */}
          <S.Container>
            <S.H1>Nova Jornada</S.H1>
            <S.Hr></S.Hr>
            <S.Parag>
              Dê um <S.Strong>nome</S.Strong> para essa Jornada
            </S.Parag>
            <S.Input></S.Input>
            <S.Parag2>Você poderá alterar essa informação depois.</S.Parag2>

            {/* Inicio da Div dos botoes */}
            <S.DivBotoes>
              <S.BotaoContinuar
                onClick={(e) => {
                  this.onClose(e);
                }}
              >
                Continuar
              </S.BotaoContinuar>

              <S.BotaoCancelar
                onClick={(e) => {
                  this.onClose(e);
                }}
              >
                Cancelar
              </S.BotaoCancelar>
            </S.DivBotoes>
            {/* Final da Div dos botoes */}
          </S.Container>
          {/*Fim de toda a caixa do modal fica aqui */}
        </S.Modal>
      </S.Overlay>,
      portalRoot
    );
  }
}
