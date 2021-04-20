import React from 'react'
import Logo from '../images/logo.png'
import {Navbar, Nav, NavDropdown, Image} from 'react-bootstrap'


export default function Header() {

return (
<React.Fragment>
<Navbar collapseOnSelect expand="md" bg="white" style={{height:'50px'}}>
  <Navbar.Brand href="/"><Image  src={Logo} height='40px'/></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
    <NavDropdown title="Mundo" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Cáucaso</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/world">Todos</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="/asia">Asia</Nav.Link>
      <Nav.Link href="africa">Africa</Nav.Link>
      <Nav.Link href="/europa">Europa</Nav.Link>
      <Nav.Link href="/america">America</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</React.Fragment>
)
}