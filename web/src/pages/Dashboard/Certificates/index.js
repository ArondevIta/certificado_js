import React from "react";

import Menu from "../Menu";

import { Container, Row, Table } from "react-bootstrap";
import { FaEdit, FaTrashAlt, FaPrint } from "react-icons/fa";

import "./style.css";

function Certificates() {
  return (
    <>
      <Menu />
      <Container style={{ marginTop: 50 }}>
        <Row>
          <h4>Certificados</h4>
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
