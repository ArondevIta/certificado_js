import React from "react";

import { Container, Card, Col, Row, Nav } from "react-bootstrap";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

import Menu from "../Menu";

import "./style.css";

function Students() {
  return (
    <>
      <Menu />
      <Container style={{ marginTop: 50 }}>
        <Row>
          <Col sm={12} md={6} lg={4}>
            <Card className="card-students">
              <Card.Header as="h6">
                Aron Madson de Tarso Sousa do Amaral
              </Card.Header>
              <Card.Body style={{ margin: 0 }}>
                <p>
                  <strong className="text-card">Matricula</strong>: 2165465
                  <FaEdit
                    className="icon-card"
                    style={{ color: "#DAA520", float: "right" }}
                  />
                </p>
                <p>
                  <strong className="text-card">Estado:</strong> BA
                </p>
                <p>
                  <strong className="text-card">Cidade:</strong> Itabuna
                  <FaTrashAlt
                    className="icon-card"
                    style={{ float: "right", color: "crimson" }}
                  />
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <Card className="card-students">
              <Card.Header as="h6">
                Aron Madson de Tarso Sousa do Amaral
              </Card.Header>
              <Card.Body style={{ margin: 0 }}>
                <p>
                  <strong className="text-card">Matricula</strong>: 2165465
                  <FaEdit
                    className="icon-card"
                    style={{ color: "#DAA520", float: "right" }}
                  />
                </p>
                <p>
                  <strong className="text-card">Estado:</strong> BA
                </p>
                <p>
                  <strong className="text-card">Cidade:</strong> Itabuna
                  <FaTrashAlt
                    className="icon-card"
                    style={{ float: "right", color: "crimson" }}
                  />
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <Card className="card-students">
              <Card.Header as="h6">
                Aron Madson de Tarso Sousa do Amaral
              </Card.Header>
              <Card.Body style={{ margin: 0 }}>
                <p>
                  <strong className="text-card">Matricula</strong>: 2165465
                  <FaEdit
                    className="icon-card"
                    style={{ color: "#DAA520", float: "right" }}
                  />
                </p>
                <p>
                  <strong className="text-card">Estado:</strong> BA
                </p>
                <p>
                  <strong className="text-card">Cidade:</strong> Itabuna
                  <FaTrashAlt
                    className="icon-card"
                    style={{ float: "right", color: "crimson" }}
                  />
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Students;
