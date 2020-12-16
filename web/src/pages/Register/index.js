import React, { useState, useEffect } from "react";
import axios from "axios";

import { Container, Card, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import api from "../../services/api";

import "./style.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");
  const [name, setName] = useState("");
  const [ufs, setUfs] = useState([]);
  const [cities, setCities] = useState([]);

  const [selectedUf, setSelectedUf] = useState("0");
  const [selectedCity, setSelectedCity] = useState("0");

  const is_admin = false;

  const history = useHistory();

  useEffect(() => {
    axios
      .get("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
      .then((response) => {
        const ufInitials = response.data.map((uf) => uf.sigla);
        setUfs(ufInitials);
      });
  }, []);

  useEffect(() => {
    if (selectedUf === "0") {
      return;
    }
    axios
      .get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`
      )
      .then((response) => {
        const cityNames = response.data.map((city) => city.nome);
        setCities(cityNames);
      });
  }, [selectedUf]);

  function handleSelectUf(e) {
    const uf = e.target.value;
    setSelectedUf(uf);
  }

  function handleSelectCity(e) {
    const city = e.target.value;
    setSelectedCity(city);
  }

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

      const user_id = response.data.id;
      const token = response.data.token;
      console.log(user_id);
      console.log(token);

      await api.post("students", {
        name,
        user_id,
        city: selectedCity,
        uf: selectedUf,
      });
      history.push("student");
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
          <Form.Group controlId="formBasicPassword1">
            <Form.Control
              type="password"
              name="password1"
              value={password1}
              onChange={(e) => setPassword1(e.target.value)}
              placeholder="Confirmar senha"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              name="uf"
              value={selectedUf}
              onChange={handleSelectUf}
              as="select"
            >
              <option value="0">Selecione um Estado</option>
              {ufs.map((uf) => (
                <option key={uf} value={uf}>
                  {uf}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Control
              name="city"
              value={selectedCity}
              onChange={handleSelectCity}
              as="select"
            >
              <option value="0">Selecione uma cidade</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
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
