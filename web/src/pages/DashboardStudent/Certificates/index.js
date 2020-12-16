import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Menu from "../Menu";
import img from "../../../assets/certificado.png";
import api from "../../../services/api";

import { Container, Row, Table } from "react-bootstrap";
import { FaPrint } from "react-icons/fa";
import jsPDF from "jspdf";

// import "./style.css";

function Certificates() {
  const [certificates, setCertificates] = useState([]);

  const token = localStorage.getItem("token");
  const id = localStorage.getItem("userId");

  async function loadCertificates() {
    const res = await api.get(`students/?user_id=${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const id_student = res.data.students[0].id;

    const response = await api.get(
      `certificates?id=${id_student}`,

      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    const { certificates } = response.data;

    setCertificates(certificates);
  }

  useEffect(() => {
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
              </tr>
            </thead>
            <tbody>
              {certificates.length > 0 ? (
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
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={2}>
                    Você ainda não possui certificados para impressão
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </Row>
      </Container>
    </>
  );
}

export default Certificates;
