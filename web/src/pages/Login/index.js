import React from "react";

import { Container, Form, Button } from "react-bootstrap";

import "./style.css";

function Login() {
  return (
    <Container id="content">
      <h4>Certificado Legal</h4>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Digite seu Email" required />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Insira sua senha" />
        </Form.Group>
        <Button className="btn-login" type="submit" variant="dark">
          Entrar
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
