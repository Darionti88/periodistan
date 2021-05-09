import React from 'react'
import Logo from '../images/logo.png'
import {Navbar, Nav, Image} from 'react-bootstrap'
import './HeadFoot.css'


export default function Header() {

return (
<React.Fragment>
  <Navbar collapseOnSelect expand="md" className="bckg" style={{height:'50px', fontFamily: 'Poppins, sans-serif'}}>
    <Navbar.Brand href="/"><Image  src={Logo} height='40px'/></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="/asia">Asia</Nav.Link>
        <Nav.Link href="/africa">Africa</Nav.Link>
        <Nav.Link href="/europa">Europa</Nav.Link>
        <Nav.Link href="/america">America</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
</React.Fragment>
)
}