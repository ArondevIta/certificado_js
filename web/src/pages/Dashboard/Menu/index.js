import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { FaHome, FaUserGraduate, FaSignOutAlt } from "react-icons/fa";

function Menu() {
  return (
    <Navbar bg="primary" expand="lg">
      <Navbar.Brand href="#home">Certificado Legal</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">
            Home <FaHome />
          </Nav.Link>
          <Nav.Link href="/login">
            Alunos <FaUserGraduate />
          </Nav.Link>
          <NavDropdown title="Menu" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">
              Cadastrar Aluno
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Cadastrar Certificado
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Certificados</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#link">
            Sair <FaSignOutAlt />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Menu;
