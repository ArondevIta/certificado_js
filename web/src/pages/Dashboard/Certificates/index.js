import React, { useEffect, useState } from "react";

import Menu from "../Menu";
import img from "../../../assets/certificado.png";
import api from "../../../services/api";

import {
  Container,
  Row,
  Table,
  Button,
  Modal,
  Form,
  Col,
} from "react-bootstrap";
import { FaEdit, FaTrashAlt, FaPrint, FaPlusSquare } from "react-icons/fa";
import jsPDF from "jspdf";

import "./style.css";

function Certificates() {
  const [show, setShow] = useState(false);
  const [certificates, setCertificates] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");

  console.log(token);

  useEffect(() => {
    async function loadCertificates() {
      const response = await api.get("certificates", {
        headers: { Authorization: `Bearer ${token}` },
      });

      const { certificates } = response.data;

      console.log(response.data);

      setCertificates(certificates);
    }

    loadCertificates();
  }, []);

  async function generatePDF(id) {
    const response = await api.get(`certificates/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    const {
      student_id,
      code,
      institution,
      date,
      coordinate,
      charge_horary,
    } = response.data;

    const res = await api.get(`students/${student_id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    const { name } = res.data.student;

    var doc = new jsPDF({
      orientation: "landscape",
    });

    doc.addImage(img, "png", 0, 1, 300, 200);

    doc.text(
      40,
      100,
      `Certificamos que o aluno ${name} terminou o curso
    de sistemas de informação pela ${institution}, com carga
    horária de ${charge_horary} horas.`
    );
    doc.text(60, 159, date);

    doc.setFont("arial", "italic").text(150, 159, coordinate);
    doc.text(140, 160, "________________________");

    doc
      .setFont("times", "italic")
      .setFontSize(8)
      .text(80, 185, `código: ${code}`);

    doc.save("certificado.pdf");
  }

  return (
    <>
      <Menu />
      <Container style={{ marginTop: 50, textAlign: "center" }}>
        <Button
          onClick={handleShow}
          style={{ marginBottom: 15, width: 200 }}
          size="lg"
          variant="outline-primary"
        >
          Adicionar <FaPlusSquare />
        </Button>
        <Modal size="lg" show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Cadastro de certificado</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formGridState">
                <Form.Label>Aluno</Form.Label>
                <Form.Control as="select" defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Control>
              </Form.Group>
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
              <Button
                style={{ float: "right" }}
                variant="primary"
                onClick={handleClose}
              >
                Cadastrar certificado
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
        <Row>
          <Table
            className="table-certificates"
            responsive
            striped
            bordered
            hover
            variant="dark"
          >
            <thead>
              <tr>
                <th>Codigo</th>
                <th>Instituição</th>
                <th>Curso</th>
                <th>Carga Horária</th>
                <th>Coordenador</th>
                <th>Data</th>
                <th>Imprimir</th>
                <th>Ação</th>
              </tr>
            </thead>
            <tbody>
              {certificates &&
                certificates.map((certificate) => (
                  <tr>
                    <td>{certificate.code}</td>
                    <td>{certificate.institution}</td>
                    <td>{certificate.course}</td>
                    <td>{certificate.charge_horary}</td>
                    <td>{certificate.coordinate}</td>
                    <td>{certificate.date}</td>
                    <td>
                      <FaPrint
                        className="print-icon"
                        onClick={() => generatePDF(certificate.id)}
                      />
                    </td>
                    <td>
                      <FaEdit color={"yellow"} />{" "}
                      <FaTrashAlt color={"crimson"} />
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Row>
      </Container>
    </>
  );
}

export default Certificates;
