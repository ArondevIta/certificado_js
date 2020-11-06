import React from "react";
import { useHistory } from "react-router-dom";

import { Container, Card, Form, Button } from "react-bootstrap";

import "./style.css";

function Register() {
  return (
    <Container id="content">
      <Card className="card-register">
        <h4>Cadastre-se</h4>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Digite seu Email"
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Senha" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Confirmar senha" />
          </Form.Group>
          <Button className="btn-login" type="submit" variant="dark">
            Cadastrar
          </Button>
        </Form>
      </Card>
    </Container>
  );
}

export default Register;
