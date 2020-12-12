import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { FaHome, FaSignOutAlt, FaCertificate, FaUser } from "react-icons/fa";
import { useHistory } from "react-router-dom";

function Menu() {
  const history = useHistory();

  function handleLogout() {
    localStorage.clear();
    history.push("/");
  }

  return (
    <Navbar style={{ backgroundColor: "#F4A460" }} expand="lg">
      <Navbar.Brand href="#home">Certificado Legal</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/student">
            Home <FaHome />
          </Nav.Link>
          <Nav.Link href="/student/certificates">
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
