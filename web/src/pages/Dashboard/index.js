import React from "react";

import { Container, Card, Col, Row } from "react-bootstrap";

import Menu from "./Menu";

function Dashboard() {
  return (
    <>
      <Menu />
      <Container>
        <Row>
          <Col sm={12} md={6} lg={4}>
            <Card>
              <Card.Title> TESTE</Card.Title>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <Card>
              <Card.Title> TESTE</Card.Title>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <Card>
              <Card.Title> TESTE</Card.Title>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;
