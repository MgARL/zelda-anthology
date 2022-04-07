import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'
import triForce from '../images/triforce.png'


import MyNav from './MyNav'
import Searchbar from './Searchbar';

function NavigationBar({ Link, logo }) {
  return (
    <Row style={{ width: '100%' }} className='mb-3'>
      <Col xs={12} md={4} className='d-flex align-items-center justify-content-center'>
        <Navbar variant="light">
          <MyNav Link={Link} logo={logo} />
        </Navbar>
      </Col>
      <Col xs={12} md={4} className='d-flex justify-content-center'>
        <Link to='/' className='d-flex align-items-center justify-content-center text-dark' style={{ 'text-decoration': 'none' }}>
          <img src={triForce} alt='The Triforce' height='50' className='pb-2 me-2' /><h3>Zelda Anthology</h3>
        </Link>
      </Col>
      <Col xs={12} md={4} className='d-flex align-items-center justify-content-end'>
        <Searchbar />
      </Col>
    </Row>
  )
}

export default NavigationBar