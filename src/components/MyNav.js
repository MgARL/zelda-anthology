import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

// My Comps
import Searchbar from './Searchbar'


function MyNav({ Link, logo }) {
  return (
    <>
      <Navbar variant='light' expand='sm' className='bg1 px-3'>
        <Navbar.Brand as={Link} to="/"><img src={logo} width="40" height="40" className="d-inline-block align-center" alt="Link logo" /><span className='ms-2'>Zelda Anthology</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id='navbar' >
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
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default MyNav