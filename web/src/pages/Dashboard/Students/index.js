import React, { useState, useEffect } from "react";

import {
  Container,
  Card,
  Col,
  Row,
  Modal,
  Form,
  Button,
} from "react-bootstrap";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

import Menu from "../Menu";
import api from "../../../services/api";

import "./style.css";

function Students() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [registration, setRegistration] = useState("");
  const [studentId, setStudentId] = useState();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (student) => {
    setName(student.name);
    setRegistration(student.registration);
    setCity(student.city);
    setState(student.uf);
    setStudentId(student.id);
    setShow(true);
  };

  const token = localStorage.getItem("token");

  async function loadStudents() {
    const response = await api.get("students", {
      headers: { Authorization: `Bearer ${token}` },
    });

    const { students } = response.data;

    setStudents(students);
  }

  useEffect(() => {
    loadStudents();
  }, []);

  async function handleRemoveStudent(id) {
    await api.delete(`students/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    loadStudents();
  }

  async function handleEdit(e) {
    e.preventDefault();
    const data = {
      uf: state,
      city,
      name,
      registration,
    };
    try {
      await api.put(`students/${studentId}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      });
      handleClose();
      loadStudents();
    } catch {
      alert("OOOPS, ALGO DEU ERRADO.");
    }
  }

  return (
    <>
      <Menu />
      <Container style={{ marginTop: 50 }}>
        <Row>
          {students &&
            students.map((student) => (
              <Col key={student.id} sm={12} md={6} lg={4}>
                <Card className="card-students">
                  <Card.Header
                    style={{ color: "#ffffff", background: "#3d3d3d" }}
                    as="h6"
                  >
                    {student.name}
                  </Card.Header>
                  <Card.Body style={{ margin: 0 }}>
                    <p>
                      <strong className="text-card">Matricula:</strong>
                      {student.registration}
                      <FaEdit
                        onClick={() => handleShow(student)}
                        className="icon-card"
                        style={{ color: "#DAA520", float: "right" }}
                      />
                    </p>
                    <p>
                      <strong className="text-card">Estado:</strong>{" "}
                      {student.uf}
                    </p>
                    <p>
                      <strong className="text-card">Cidade:</strong>
                      {student.city}
                      <FaTrashAlt
                        className="icon-card"
                        style={{ float: "right", color: "crimson" }}
                        onClick={(e) => handleRemoveStudent(student.id)}
                      />
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edição de Aluno</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleEdit}>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>Nome:</Form.Label>
                    <Form.Control
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Matricula:</Form.Label>
                    <Form.Control
                      type="text"
                      value={registration}
                      onChange={(e) => setRegistration(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Estado:</Form.Label>
                    <Form.Control
                      type="text"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Cidade:</Form.Label>
                    <Form.Control
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Button className="btn-save" type="submit" variant="dark">
                Salvar
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </Container>
    </>
  );
}

export default Students;
