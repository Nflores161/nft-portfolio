import React from 'react'
import { Container, Row } from 'react-bootstrap'

const PortfolioCard = () => {
  return (
    <Container>
      <Row lg={3}>
        <h1>Title</h1>
        <img scr="#" alt="none"></img>
        <p>description</p>
      </Row>
    </Container>
  )
}
export default PortfolioCard