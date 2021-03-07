/**
 * ************************************
 *
 * @module  NavBar
 * @author  Hanji Chen
 * @date    March 7, 2021
 * @description
 *
 * ************************************
 */

import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function NavBar() {
  return (
    <Navbar expand="lg" fixed="top">
      <Navbar.Brand href="/aboutus">
        <strong> RecipeMaker </strong>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
        </Nav>
        <Nav className="ms-auto">
          <Nav.Link href="/">GitHub Login</Nav.Link>
          <Nav.Link href="/">Sing Up / Login </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
