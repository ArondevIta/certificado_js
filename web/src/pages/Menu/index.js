import React from "react";
import { Nav, Navbar, Form, Button, FormControl } from "react-bootstrap";

function Menu() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Certificado Legal</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Entrar</Nav.Link>
        <Nav.Link href="#pricing">Cadastrar</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl
          type="text"
          placeholder="Código Certificado"
          className="mr-sm-2"
        />
        <Button variant="outline-success">Verificar</Button>
      </Form>
    </Navbar>
  );
}

export default Menu;
