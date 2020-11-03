import React from "react";
import { Nav, Navbar, Form, Button, FormControl } from "react-bootstrap";

function Menu() {
  return (
    <Navbar bg="primary" expand="lg">
      <Navbar.Brand href="#home">Certificado Legal</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Entrar</Nav.Link>
          <Nav.Link href="#link">Cadastre-se</Nav.Link>
        </Nav>
        <Form inline>
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
