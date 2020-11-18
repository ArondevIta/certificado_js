import React, { useState, useEffect } from "react";

import { Container, Card, Col, Row } from "react-bootstrap";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useHistory } from "react-router-dom";

import Menu from "../Menu";
import api from "../../../services/api";

import "./style.css";

function Students() {
  const [students, setStudents] = useState([]);

  const token = localStorage.getItem("token");

  useEffect(() => {
    async function loadStudents() {
      const response = await api.get("students", {
        headers: { Authorization: `Bearer ${token}` },
      });

      const { students } = response.data;

      setStudents(students);
    }
    loadStudents();
  }, []);

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
                      />
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
}

export default Students;
