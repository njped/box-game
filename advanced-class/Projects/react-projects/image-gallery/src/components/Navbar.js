import React from 'react'
import {
  Container,
  Nav,
  Navbar,
  NavDropdown
} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function NavigationBar() {
  const categories = [
    {name: 'Wallpapers', slug: 'wallpapers'},
    {name: 'Nature', slug: 'nature' },
    {name: 'Travel', slug:'travel'},
    {name: 'Animals', slug: 'animals'},
    {name: 'Food & Drink', slug: 'food-drink'},
  ]

  const slugData = [...categories]
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
              <Nav.Link as={Link} to="/favorites">Favorites</Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              {slugData.map ((slugs) => {
                <NavDropdown.Item as={Link} to={'/category/' + slugs.slug}>{slugs.name}</NavDropdown.Item>
              })}
              {/* <NavDropdown.Item as={Link} to="/category/nature">Nature</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/travel">Travel</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/animals">Animals</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/food-drink">Food & Drink</NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}