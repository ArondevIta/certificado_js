import React, { useState } from "react";

import Menu from "../Menu";

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

import img from "../../../assets/certificado.png";

function Certificates() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const generatePDF = () => {
    var doc = new jsPDF({
      orientation: "landscape",
    });

    const nome = "Aron";

    doc.addImage(img, "png", 0, 1, 300, 200);

    doc.text(
      20,
      100,
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      In fermentum, sapien vel ornare gravida, ipsum sem finibus arcu, 
      sit amet pretium urna lorem quis lorem. Mauris quis cursus lacus. 
      Integer viverra leo nec volutpat ultrices. In vel erat dignissim, ultricies ex quis, euismod tellus. Nam et augue vitae nisl euismod laoreet. Quisque mi risus, efficitur varius pellentesque id, ultrices quis magna. Mauris ut auctor urna. Sed sem risus, scelerisque a lacinia at, accumsan scelerisque nunc. Vestibulum finibus tellus sit amet ultrices ultricies. Pellentesque cursus suscipit elit quis malesuada. Donec nibh elit, rhoncus sit amet volutpat at, condimentum nec ex. Sed sodales dui sed ipsum pulvinar porta. Phasellus aliquet consectetur quam at imperdiet. Maecenas convallis dignissim lorem eu pulvinar. Proin vitae mattis sapien.`
    );

    doc.save("demo.pdf");
  };

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
              <tr>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>
                  <FaPrint onClick={generatePDF} />
                </td>
                <td>
                  <FaEdit color={"yellow"} /> <FaTrashAlt color={"crimson"} />
                </td>
              </tr>
              <tr>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>
                  <FaPrint />
                </td>
                <td>
                  <FaEdit color={"yellow"} /> <FaTrashAlt color={"crimson"} />
                </td>
              </tr>
              <tr>
                <td>Larry the Bird</td>
                <td>@twitter</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>
                  <FaPrint />
                </td>
                <td>
                  <FaEdit color={"yellow"} /> <FaTrashAlt color={"crimson"} />
                </td>
              </tr>
            </tbody>
          </Table>
        </Row>
      </Container>
    </>
  );
}

export default Certificates;
