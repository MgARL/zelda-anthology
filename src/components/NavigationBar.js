import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'


import MyNav from './MyNav'
import Searchbar from './Searchbar';

function NavigationBar({ Link, logo }) {
  return (
    <Row className='bg1 pb-2 sticky-top'>
      <Col xs={12} sm={6} className='d-flex align-items-center justify-content-start'>
        <Navbar variant="light">
          <MyNav Link={Link} logo={logo} />
        </Navbar>
      </Col>
      <Col xs={12} md={6} className='d-flex align-items-center justify-content-end'>
        <Searchbar />
      </Col>
    </Row>
  )
}

export default NavigationBar