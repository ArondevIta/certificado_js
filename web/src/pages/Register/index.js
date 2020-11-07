import React, { useState } from "react";

import { Container, Card, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import api from "../../services/api";

import "./style.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");
  const [name, setName] = useState("");
  const [uf, setUf] = useState("");
  const [city, setCity] = useState("");
  const is_admin = false;

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();
    if (password !== password1) {
      alert("Senhas Diferentes");
      return;
    }

    try {
      const response = await api.post("register", {
        email,
        password,
        is_admin,
      });
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userId", response.data.id);

      history.push("dashboard");
    } catch (err) {
      alert("Err", err);
    }
  }

  return (
    <Container id="content">
      <Card className="card-register">
        <h4>Cadastre-se</h4>
        <Form onSubmit={handleRegister}>
          <Form.Group controlId="formBasicText">
            <Form.Control
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nome completo"
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu Email"
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Control
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Senha"
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Control
              type="password"
              name="password1"
              value={password1}
              onChange={(e) => setPassword1(e.target.value)}
              placeholder="Confirmar senha"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control size="sm" as="select">
              <option>BA</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Control size="sm" as="select">
              <option>Itabuna</option>
            </Form.Control>
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
