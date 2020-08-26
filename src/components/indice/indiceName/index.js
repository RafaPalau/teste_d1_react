import React, { useState, useEffect } from "react";
import * as S from "./styled";
import filtro from "../../services/tabela";

import enviadoIcon from "../../../assets/icons/paper-plane.svg";
import ativadasIcon from "../../../assets/icons/play-circle.svg";
import configurandoIcon from "../../../assets/icons/pen.svg";
import ociosaIcon from "../../../assets/icons/bed.svg";
import concluidaIcon from "../../../assets/icons/check.svg";

function IndiceName() {
  const [indice, setindice] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function getItems() {
      const response = await filtro.get(`/${indice}`);
      setItems(response.data);
    }

    getItems();
  }, [indice]);

  function getName(e) {
    if (e.target.innerText === "Todos") {
      setindice("");
    } else if (e.target.innerText === "Em execução") {
      setindice("1");
    } else if (e.target.innerText === "Ativa") {
      setindice("2");
    } else if (e.target.innerText === "Configurando") {
      setindice("3");
    } else if (e.target.innerText === "Ociosa") {
      setindice("4");
    } else if (e.target.innerText === "Concluída") {
      setindice("5");
    }
  }

  function getStatusName(item) {
    if (item === 1) {
      return (
        <S.DivStatus>
          <S.ImgEnviado src={enviadoIcon} />
          <p>Em execução</p>
        </S.DivStatus>
      );
    } else if (item === 2) {
      return (
        <S.DivStatus>
          <S.ImgAtivadas src={ativadasIcon} />
          <p>Ativa</p>
        </S.DivStatus>
      );
    } else if (item === 3) {
      return (
        <S.DivStatus>
          <S.ImgConfigurando src={configurandoIcon} />
          <p>Configurando</p>
        </S.DivStatus>
      );
    } else if (item === 4) {
      return (
        <S.DivStatus>
          <S.ImgOciosa src={ociosaIcon} />
          <p>Ociosa</p>
        </S.DivStatus>
      );
    } else if (item === 5) {
      return (
        <S.DivStatus>
          <S.ImgCheck src={concluidaIcon} />
          <p>Concluída</p>
        </S.DivStatus>
      );
    }
  }

  return (
    <S.Container onClick={getName}>
      <S.DivLista>
        <S.Li>Todos</S.Li>
        <S.Li>Em execução</S.Li>
        <S.Li>Ativa</S.Li>
        <S.Li>Configurando</S.Li>
        <S.Li>Ociosa</S.Li>
        <S.Li>Concluída</S.Li>
      </S.DivLista>

      <S.DivTabela>
        <S.Table>
          <S.TdNome>Nome</S.TdNome>
          <S.TdDestinatario>Destinatário</S.TdDestinatario>
          <S.TdSucesso>Sucesso</S.TdSucesso>
          <S.TdStatus>Status</S.TdStatus>
        </S.Table>

        <S.DivName>
          <S.LiStatus>
            <S.Ul>
              {items?.map((item, index) => (
                <S.LiName key={index}>{item.name}</S.LiName>
              ))}
            </S.Ul>{" "}
          </S.LiStatus>
          <S.LiStatus>
            <S.Ul>
              {items?.map((item, index) => (
                <S.LiRecipients key={index}>{item.recipients}</S.LiRecipients>
              ))}
            </S.Ul>
          </S.LiStatus>

          <S.LiStatus>
            {items?.map((item, index) => (
              <S.LiSuccess key={index}>{item.success}</S.LiSuccess>
            ))}
          </S.LiStatus>

          <S.LiStatus>
            {items?.map((item) => getStatusName(item.status))}
          </S.LiStatus>
        </S.DivName>
      </S.DivTabela>
    </S.Container>
  );
}

export default IndiceName;
