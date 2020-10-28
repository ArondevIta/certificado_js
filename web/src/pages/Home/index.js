import React from "react";
import { Container, Button, Row, Col, Image } from "react-bootstrap";

import certificado1 from "../../assets/certificado1.jpg";
import certificado2 from "../../assets/certificado2.jpg";
import certificado3 from "../../assets/certificado3.png";

import "./style.css";

function Home() {
  return (
    <Container id="container">
      <h1>Certificado Legal</h1>
      <p>
        Gere seu certificado de onde quiser, apenas tendo acesso a internet!
      </p>

      <Button className="butao" variant="dark" size="lg">
        Login
      </Button>
      <Button
        style={{ marginLeft: 15, width: 200 }}
        variant="outline-secondary"
        size="lg"
      >
        Cadastre-se
      </Button>

      <Row>
        <Col sm={4}>
          <Image className="img-fluid" src={certificado1} rounded />
        </Col>
        <Col sm={4}>
          <Image className="img-fluid" src={certificado2} rounded />
        </Col>
        <Col sm={4}>
          <Image className="img-fluid" src={certificado3} rounded />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
