import React from 'react'
import confusedIMG from '../images/Link_confused.png'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Page404() {
  return (
    <Container className='fill-page mt-5 bg1'>
      <h1>Page Not Found Error code 404</h1>
      <img src={confusedIMG} alt="Confused Link" />
      <p>We are sorry we couldn't find that item or page</p>
      <Row className='d-flex justify-content-center'>
        <Col sm={3}>
          <Button as={Link} to="/" variant='warning'>
            Back to Home
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default Page404