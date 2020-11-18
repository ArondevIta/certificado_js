import React, { useEffect, useState } from "react";

import { Container, Form, Button, Col } from "react-bootstrap";
import { useLocation, useHistory } from "react-router-dom";

import Menu from "../../Menu";
import api from "../../../../services/api";

function EditCertificate() {
  const [institutionEdit, setInstitutionEdit] = useState("");
  const [chargeHoraryEdit, setChargeHoraryEdit] = useState("");
  const [courseEdit, setCourseEdit] = useState("");
  const [coordinateEdit, setCoordinateEdit] = useState("");

  const history = useHistory();

  const location = useLocation();
  const { id, institution, charge_horary, coordinate, course } = location.state;
  const token = localStorage.getItem("token");

  useEffect(() => {
    setInstitutionEdit(institution);
    setChargeHoraryEdit(charge_horary);
    setCourseEdit(course);
    setCoordinateEdit(coordinate);
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    await api.put(
      `certificates/${id}`,
      {
        institution: institutionEdit,
        charge_horary: chargeHoraryEdit,
        coordinate: coordinateEdit,
        course: courseEdit,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    history.push("../certificates");
  }

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
        <Form onSubmit={handleSubmit}>
          <h4>Edição de certificado</h4>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridInstituition">
              <Form.Label>Instituição</Form.Label>
              <Form.Control
                name="institution"
                value={institutionEdit}
                onChange={(e) => setInstitutionEdit(e.target.value)}
                type="text"
                placeholder="Nome da Instituição de ensino"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCourse">
              <Form.Label>Curso</Form.Label>
              <Form.Control
                name="course"
                value={courseEdit}
                onChange={(e) => setCourseEdit(e.target.value)}
                type="text"
                placeholder="Nome do Curso"
              />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridHours">
            <Form.Label>Carga Horária</Form.Label>
            <Form.Control
              name="charge_horary"
              value={chargeHoraryEdit}
              onChange={(e) => setChargeHoraryEdit(e.target.value)}
              type="number"
              placeholder="Por favor digite a carga horária"
            />
          </Form.Group>

          <Form.Group controlId="formGridCoordinate">
            <Form.Label>Coordenador</Form.Label>
            <Form.Control
              name="coordinate"
              value={coordinateEdit}
              onChange={(e) => setCoordinateEdit(e.target.value)}
              placeholder="Nome do Coordenador"
            />
          </Form.Group>
          <Button type="submit" style={{ float: "right" }} variant="primary">
            Salvar certificado
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default EditCertificate;
