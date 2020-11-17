import React, { useState } from "react";

import { Container, Form, Button, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";

import Menu from "../../Menu";
import api from "../../../../services/api";

function EditCertificate() {
  const location = useLocation();
  const { id, institution, charge_horary, coordinate, course } = location.state;
  const token = localStorage.getItem("token");

  return (
    <>
      <Menu />

      <Container
        style={{
          width: 400,
          color: "#ffffff",
          marginTop: 25,
        }}
      >
        <Form>
          <h4>Edição de certificado</h4>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridInstituition">
              <Form.Label>Instituição</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nome da Instituição de ensino"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCourse">
              <Form.Label>Curso</Form.Label>
              <Form.Control type="text" placeholder="Nome do Curso" />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridHours">
            <Form.Label>Carga Horária</Form.Label>
            <Form.Control
              type="number"
              placeholder="Por favor digite a carga horária"
            />
          </Form.Group>

          <Form.Group controlId="formGridCoordinate">
            <Form.Label>Coordenador</Form.Label>
            <Form.Control placeholder="Nome do Coordenador" />
          </Form.Group>
          <Button style={{ float: "right" }} variant="primary">
            Editar certificado
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default EditCertificate;
