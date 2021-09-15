import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';

const Navigation = (props) => {
  return(
    <div>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Nav.Item>
          <NavLink to='/' as={Link} >
            <Button variant="dark">Home</Button>
          </NavLink>
        </Nav.Item> 
        <Nav.Item>
          <Nav.Link to='/about' as={Link} >
            <Button>About</Button>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link to='/portfolio' as={Link} >
            <Button>Portfolio</Button>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link to='/contact' as={Link} >
            <Button>Contact</Button>
          </Nav.Link>
        </Nav.Item>
      </Navbar>
    </div> 
  )
}

export default Navigation