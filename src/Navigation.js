import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const Navigation = (props) => {
  return(
    // <div className="lob-font">
      <Navbar fill expand="lg" variant="tabs" className="justify-content-around fixed-top-nav fixed-top">
        <Nav className="mr-auto nav-btn">
          <NavLink activeClassName="active" to='/home' as={Link} className="NavLink">
            <h4 style={{color: "white"}} >Home</h4>
          </NavLink>
        </Nav> 
        <Nav className="mr-auto">
          <NavLink activeClassName="active" to='/about' as={Link} className="NavLink">
            <h4 style={{color: "white"}} size="md">About</h4>
          </NavLink>
        </Nav>
        <Nav className="mr-auto">
          <NavLink activeClassName="active" to='/portfolio' as={Link} className="NavLink">
            <h4 style={{color: "white"}} size="md">Portfolio</h4>
          </NavLink>
        </Nav>
        <Nav className="mr-auto">
          <NavLink activeClassName="active" to='/contact' as={Link} className="NavLink">
            <h4 style={{color: "white"}} size="md">Contact</h4>
          </NavLink>
        </Nav>
      </Navbar>
  )
}

export default Navigation