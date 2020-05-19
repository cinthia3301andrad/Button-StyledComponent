import React, { useState } from "react";
import {MyButtons, Button, Div} from './styled.js';

export default function App() {

  const [botaoSelecionado, setBotaoSelecionado] = useState("meusDados");

  function handleClick(botao) {
    setBotaoSelecionado(botao);
    alert("Você clicou no botão " + botao);
  }
  return (
    <Div>
      <Button>
        <MyButtons
          ativo={botaoSelecionado === "meusDados"}
          onClick={() => handleClick("meusDados")}
        >
          Meus dados
        </MyButtons>
        <MyButtons
          ativo={botaoSelecionado === "oQueTenho"}
          onClick={() => handleClick("oQueTenho")}
        >
          O que tenho
        </MyButtons>
        <MyButtons
          ativo={botaoSelecionado === "status"}
          onClick={() => handleClick("status")}
        >
          Status
        </MyButtons>
        <MyButtons
          ativo={botaoSelecionado === "agenda"}
          onClick={() => handleClick("agenda")}
        >
          Agenda
        </MyButtons>
        <MyButtons
          ativo={botaoSelecionado === "extras"}
          onClick={() => handleClick("extras")}
        >
          Extras
        </MyButtons>
      </Button>
    </Div>
  );
}


