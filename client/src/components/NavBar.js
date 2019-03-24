import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <>
      <Navbar className="topbar-container" bg="dark" variant="dark">
        <Nav className="topbar-left-links">
          <Nav.Link href="#explore">Explore</Nav.Link>
          <Nav.Link href="#start">Start a project</Nav.Link>
        </Nav>
        <Navbar.Brand href="#home">Jumpstart</Navbar.Brand>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
        <Nav className="topbar-right-links">
          <Nav.Link href="#signin">Sign in</Nav.Link>
        </Nav>
      </Navbar>

      <Navbar className="navbar-container" bg="dark" variant="dark">
        <Nav className="navbar-links">
          <Nav.Link href="#arts">Arts</Nav.Link>
          <Nav.Link href="#comics-illustration">Comics & Illustration</Nav.Link>
          <Nav.Link href="#design-tech">Design & Tech</Nav.Link>
          <Nav.Link href="#film">Film</Nav.Link>
          <Nav.Link href="#food-craft">Food & Craft</Nav.Link>
          <Nav.Link href="#games">Games</Nav.Link>
          <Nav.Link href="#music">Music</Nav.Link>
          <Nav.Link href="#publishing">Publishing</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}

export default NavigationBar;