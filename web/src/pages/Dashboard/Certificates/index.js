import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

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
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState("0");
  const [institution, setInstitution] = useState("");
  const [course, setCourse] = useState("");
  const [coordinate, setCoordinate] = useState("");
  const [charge_horary, setChargeHorary] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const token = localStorage.getItem("token");
  const history = useHistory();

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

  async function loadCertificates() {
    const response = await api.get("certificates", {
      headers: { Authorization: `Bearer ${token}` },
    });

    const { certificates } = response.data;

    setCertificates(certificates);
  }

  useEffect(() => {
    loadCertificates();
  }, []);

  async function handleAddCertificate(e) {
    e.preventDefault();
    var date = new Date();

    date = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;

    const data = {
      institution,
      course,
      charge_horary,
      coordinate,
      date,
      student_id: selectedStudent,
    };

    await api.post("certificates", data, {
      headers: { Authorization: `Bearer ${token}` },
    });

    loadCertificates();
    handleClose();
  }

  async function handleDeleteCertificate(id) {
    await api.delete(`certificates/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    loadCertificates();
  }

  function handleSelectedStudent(e) {
    e.preventDefault();
    const student = e.target.value;
    setSelectedStudent(student);
  }

  function navigateToEdit(id, course, institution, charge_horary, coordinate) {
    history.push("certificates/edit", {
      id,
      course,
      institution,
      charge_horary,
      coordinate,
    });
  }

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
            <Form onSubmit={handleAddCertificate}>
              <Form.Group controlId="formGridState">
                <Form.Label>Aluno</Form.Label>
                <Form.Control
                  name="student"
                  as="select"
                  value={selectedStudent}
                  onChange={handleSelectedStudent}
                >
                  <option value="0">Selecione um Aluno</option>
                  {students &&
                    students.map((student) => (
                      <option key={student.id} value={student.id}>
                        {student.name}
                      </option>
                    ))}
                </Form.Control>
              </Form.Group>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridInstituition">
                  <Form.Label>Instituição</Form.Label>
                  <Form.Control
                    type="text"
                    name="institution"
                    value={institution}
                    onChange={(e) => setInstitution(e.target.value)}
                    placeholder="Nome da Instituição de ensino"
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridCourse">
                  <Form.Label>Curso</Form.Label>
                  <Form.Control
                    type="text"
                    name="course"
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                    placeholder="Nome do Curso"
                  />
                </Form.Group>
              </Form.Row>

              <Form.Group controlId="formGridHours">
                <Form.Label>Carga Horária</Form.Label>
                <Form.Control
                  type="number"
                  name="charge_horary"
                  value={charge_horary}
                  onChange={(e) => setChargeHorary(e.target.value)}
                  placeholder="Por favor digite a carga horária"
                />
              </Form.Group>

              <Form.Group controlId="formGridCoordinate">
                <Form.Label>Coordenador</Form.Label>
                <Form.Control
                  type="text"
                  name="coordinate"
                  value={coordinate}
                  onChange={(e) => setCoordinate(e.target.value)}
                  placeholder="Nome do Coordenador"
                />
              </Form.Group>
              <Button
                type="submit"
                style={{ float: "right" }}
                variant="primary"
              >
                Cadastrar certificado
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
        <Row>
          <Table className="table-certificates" responsive borderless>
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
                  <tr key={certificate.id}>
                    <td>{certificate.code}</td>
                    <td>{certificate.institution}</td>
                    <td>{certificate.course}</td>
                    <td>{certificate.charge_horary}</td>
                    <td>{certificate.coordinate}</td>
                    <td>{certificate.date}</td>
                    <td>
                      <FaPrint
                        className="print-icon"
                        color={"#ADD8E6"}
                        onClick={() => generatePDF(certificate.id)}
                      />
                    </td>
                    <td>
                      <FaEdit
                        onClick={() =>
                          navigateToEdit(
                            certificate.id,
                            certificate.course,
                            certificate.institution,
                            certificate.charge_horary,
                            certificate.coordinate
                          )
                        }
                        className="edit-icon"
                        color={"yellow"}
                      />
                      <FaTrashAlt
                        className="remove-icon"
                        color={"crimson"}
                        onClick={() => handleDeleteCertificate(certificate.id)}
                      />
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
