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

import "./style.css";

function Certificates() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
                  <FaPrint />
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
