import React from 'react'
import {  Navbar,Container,} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
const Header = () => {
  return (
    <header>
      <Navbar bg="success" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
  <Navbar.Brand >Home</Navbar.Brand>
  </LinkContainer>
  <LinkContainer to='/form'>
  <Navbar.Brand >Saveform</Navbar.Brand>
  </LinkContainer>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
  
  </Navbar.Collapse>
  </Container>
</Navbar>
    </header>
  )
}

export default Header
