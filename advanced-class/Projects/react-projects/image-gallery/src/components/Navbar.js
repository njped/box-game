import React from 'react'
import {
  Container,
  Nav,
  Navbar,
  NavDropdown
} from 'react-bootstrap'
import { Link } from 'react-router-dom'


export default function NavigationBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
              <Nav.Link as={Link} to="/favorites">Favorites</Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/category/1">Category 1</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/2">Category 2</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/3">Category 3</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/4">Category 4</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}