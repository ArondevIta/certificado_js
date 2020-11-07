import React from "react";

import { Jumbotron, Button } from "react-bootstrap";

import Menu from "./Menu";

import "./style.css";

function Dashboard() {
  return (
    <>
      <Menu />
      <Jumbotron className="jumbotron-dashboard">
        <h1>Olá, Admin!</h1>
        <p>
          Comece agora a cadastrar seus alunos e gerar certificados de forma
          fácil e rápida.
        </p>
        <p>
          <Button variant="dark">Cadastrar Aluno</Button>
          <Button style={{ marginLeft: 10 }} variant="light">
            Emitir Certificado
          </Button>
        </p>
      </Jumbotron>
    </>
  );
}

export default Dashboard;
