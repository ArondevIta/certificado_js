import React from "react";
import { Nav, Navbar, Form, Button, FormControl } from "react-bootstrap";
import { FaHome, FaSignInAlt, FaUserPlus } from "react-icons/fa";
import api from "../../../services/api";

import "./style.css";

function Menu() {
  async function handleSearchCode() {
    const response = await api.get("search");
  }

  return (
    <Navbar bg="primary" expand="lg">
      <Navbar.Brand href="#home">Certificado Legal</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
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
          />
          <Button variant="outline-light">Validar</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Menu;
