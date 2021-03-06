import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// Comps
import Searchbar from './Searchbar'


function Home({ logo }) {
  return (
    <>
      <Container className='my-5 py-3 bg1 col-md-8'>
        <h4>Welcome to</h4>
        <h1>Zelda Anthology</h1>
        <img src={logo} alt='Link Logo' />
        <Row className='d-flex justify-content-center'>
          <Col xs={12} md={6}>
            <p>Here you will find information about items, creatures, monsters, and treasure from <span className='zelda-font' style={{ fontWeight: 500, fontSize: '1.5em' }}>The Legend of Zelda: Breath of the Wild</span></p>
          </Col>
        </Row>
        <Row className='d-flex justify-content-center'>
          <Col xs={12} md={6}>
            <p>Lets begin the adventure! search for the name or id number(1 to 389) of an item, creature, monster, or treasure down below:</p>
          </Col>
        </Row>
        <Row className='d-flex justify-content-center'>
          <Col xs={12} md={6}>
            <Searchbar />
          </Col>
        </Row>

      </Container>
    </>
  )
}

export default Home