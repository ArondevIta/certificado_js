import React from "react";

import {
  Nav,
  Navbar,
  Form,
  Button,
  FormControl,
  Container,
  Jumbotron,
} from "react-bootstrap";

function App() {
  return (
    <>
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
      <Jumbotron style={{ backgroundColor: "#656363" }} fluid>
        <Container>
          <h1>Fluid jumbotron</h1>
          <p>
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>
        </Container>
      </Jumbotron>
    </>
  );
}
export default App;
