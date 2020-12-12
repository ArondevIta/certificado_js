import React, { useState } from "react";

import { Container, Form, Button, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import api from "../../services/api";

import "./style.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post("login", { email, password });
      const { is_admin } = response.data;

      if (!is_admin) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userId", response.data.id);
        history.push("student");
        return;
      }

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userId", response.data.id);
      history.push("dashboard");
    } catch (err) {
      alert("Erro, usuario ou senha inválido");
    }
  }

  return (
    <Container id="content">
      <Card className="card-login">
        <h4>Certificado Legal</h4>

        <Form onSubmit={handleLogin}>
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
              placeholder="Insira sua senha"
              required
            />
          </Form.Group>

          <Button className="btn-login" type="submit" variant="dark">
            Entrar
          </Button>
        </Form>
      </Card>
    </Container>
  );
}

export default Login;
