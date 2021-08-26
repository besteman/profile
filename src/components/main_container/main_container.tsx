import React from 'react';
import logo from '../../logo.svg';
import './main_container.css';
import { Col, Container, Row } from 'react-bootstrap';

function MainContainer() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={6} md={4}>Here</Col>
        <Col xs={12} md={8}>There</Col>
      </Row>
    </Container>
  );
}

export default MainContainer;
