import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const PortfolioCard = () => {
  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <h1>Title</h1>
          <img scr="#" alt="none"></img>
          <p>description</p>
        </Col>
        <Col xs={6} md={4}>
          <h1>Title</h1>
          <img scr="#" alt="none"></img>
          <p>description</p>
        </Col>
        <Col xs={6} md={4}>
          <h1>Title</h1>
          <img scr="#" alt="none"></img>
          <p>description</p>
        </Col>
      </Row>
      <Row>
        <Col xs={6} md={4}>
          <h1>Title</h1>
          <img scr="#" alt="none"></img>
          <p>description</p>
        </Col>
        <Col xs={6} md={4}>
          <h1>Title</h1>
          <img scr="#" alt="none"></img>
          <p>description</p>
        </Col>
        <Col xs={6} md={4}>
          <h1>Title</h1>
          <img scr="#" alt="none"></img>
          <p>description</p>
        </Col>
      </Row>
    </Container>
  )
}
export default PortfolioCard