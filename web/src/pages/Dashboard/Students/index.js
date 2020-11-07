import React from "react";

import { Container, Card, Col, Row } from "react-bootstrap";

function Students() {
  return (
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
  );
}

export default Students;
