import React from "react";

import { Jumbotron, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import Menu from "./Menu";

import "./style.css";

function Dashboard() {
  const history = useHistory();

  function handleNavigateToCertificates() {
    history.push("dashboard/certificates");
  }

  function handleNavigateToStudents() {
    history.push("dashboard/students");
  }

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
          <Button onClick={handleNavigateToStudents} variant="dark">
            Listar Alunos
          </Button>
          <Button
            onClick={handleNavigateToCertificates}
            style={{ marginLeft: 10 }}
            variant="light"
          >
            Emitir Certificado
          </Button>
        </p>
      </Jumbotron>
    </>
  );
}

export default Dashboard;
