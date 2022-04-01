import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

// components
import Searchbar from './Searchbar';

function MyNav({ Link, Container, logo }) {
  return (
    <>
      <Navbar variant="light" sticky='top' className='bg1'>
        <Container fluid>
          <Navbar.Brand as={Link} to="/"><img src={logo} width="40" height="40" className="d-inline-block align-top" alt="Link logo" /></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to={'/'}>
              Home
            </Nav.Link>
            <NavDropdown title="Category" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/category/creatures">Creatures</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/equipment">Equipment</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/materials">Materials</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/monsters">Monsters</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/treasure">Treasure</NavDropdown.Item>
            </NavDropdown>
            <Searchbar />
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default MyNav