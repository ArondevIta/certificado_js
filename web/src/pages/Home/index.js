import React from "react";
import { useHistory } from "react-router-dom";

import { Container, Button, Row, Col, Image } from "react-bootstrap";

import Menu from "./Menu";

import certificado1 from "../../assets/certificado1.jpg";
import certificado2 from "../../assets/certificado2.jpg";
import certificado3 from "../../assets/certificado3.png";

import "./style.css";

function Home() {
  const history = useHistory();
  function goToLogin() {
    history.push("/login");
  }
  function goToRegister() {
    history.push("/register");
  }

  return (
    <>
      <Menu />
      <Container id="container">
        <h1>Certificado Legal</h1>
        <p>
          Gere seu certificado de onde quiser, apenas tendo acesso a internet!
        </p>

        <Button
          onClick={goToLogin}
          className="butao"
          variant="dark"
          style={{ backgroundColor: "#F4A460" }}
          size="lg"
        >
          Login
        </Button>
        <Button
          onClick={goToRegister}
          style={{
            marginLeft: 15,
            width: 200,
            color: "#F4A460",
            borderColor: "#F4A460",
          }}
          variant="outline-dark"
          size="lg"
        >
          Cadastre-se
        </Button>

        <Row className="row-img">
          <Col sm={4}>
            <h3>Gere seus certificado</h3>
            <Image className="img-fluid" src={certificado1} rounded />
            <p>
              Com o certificado legal você pode gerar certificados para seus
              alunos de onde estiver.
            </p>
          </Col>
          <Col sm={4}>
            <h3>Verifique se é válido</h3>
            <Image className="img-fluid" src={certificado2} rounded />
            <p>
              Você pode verificar se ele é válido, através do nosso sistema de
              pesquisa
            </p>
          </Col>
          <Col sm={4}>
            <h3>Imprima de onde estiver</h3>
            <Image className="img-fluid" src={certificado3} rounded />
            <p>
              E você pode imprimir ou baixar em qualquer lugar, basta apenas ter
              acesso a internet!
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
