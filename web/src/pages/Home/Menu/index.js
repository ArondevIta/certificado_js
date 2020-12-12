import React, { useState } from "react";
import { Nav, Navbar, Form, Button, FormControl } from "react-bootstrap";
import { FaHome, FaSignInAlt, FaUserPlus } from "react-icons/fa";
import api from "../../../services/api";

import "./style.css";

function Menu() {
  const [code, setCode] = useState("");
  async function handleSearchCode(e) {
    e.preventDefault();
    const response = await api.get("search", { params: { code } });
    if (response.data !== true) {
      alert("Certificado inválido!");
      return;
    }
    alert("Certificado válido");
  }

  return (
    <Navbar style={{ backgroundColor: "#F4A460" }} expand="lg">
      <Navbar.Brand href="#home">Certificado Legal</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link id="link-menu" href="/">
            Home <FaHome />
          </Nav.Link>
          <Nav.Link id="link-menu" href="/login">
            Entrar <FaSignInAlt />
          </Nav.Link>
          <Nav.Link id="link-menu" href="/register">
            Cadastre-se <FaUserPlus />
          </Nav.Link>
        </Nav>
        <Form method="get" inline onSubmit={handleSearchCode}>
          <FormControl
            type="text"
            placeholder="Digite o codigo do certificado"
            className="mr-sm-2"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Código Certificado"
            required
          />
          <Button type="submit" variant="outline-light">
            Validar
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Menu;
