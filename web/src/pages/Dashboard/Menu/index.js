import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import {
  FaHome,
  FaUserGraduate,
  FaSignOutAlt,
  FaCertificate,
} from "react-icons/fa";
import { useHistory } from "react-router-dom";

function Menu() {
  const history = useHistory();

  function handleLogout() {
    localStorage.clear();
    history.push("/");
  }

  return (
    <Navbar bg="primary" expand="lg">
      <Navbar.Brand href="#home">Certificado Legal</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/dashboard">
            Home <FaHome />
          </Nav.Link>
          <Nav.Link href="/dashboard/students">
            Alunos <FaUserGraduate />
          </Nav.Link>
          <Nav.Link href="/dashboard/certificates">
            Certificados <FaCertificate />
          </Nav.Link>

          <Nav.Link onClick={handleLogout}>
            Sair <FaSignOutAlt />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Menu;
