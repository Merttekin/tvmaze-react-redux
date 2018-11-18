import React from 'react';
import { NavLink } from 'react-router-dom';
import {Navbar, NavItem, Nav } from 'react-bootstrap';

const Navigation = () => {
    return(
        <Navbar>
  <Nav>
    <NavItem >
      <NavLink to="/">Home</NavLink>
    </NavItem>
  </Nav>
</Navbar>
    )
}

export default Navigation;