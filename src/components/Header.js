import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const common = {
    marginRight: 15,
    marginTop:10,
    fontSize: 17,
    letterSpacing: ".5px"
  }

  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand className='mt-2 h2_right' href="#home" style={{ color: "#6c63ff" }}>
          <NavLink to="/" className='text-decoration-none'>Dewmi Silva</NavLink>
          </Navbar.Brand>
          <Nav className="ms-auto">
            <NavLink to="/" className='text-decoration-none' style={common}>Home</NavLink>
            <NavLink to="/about" className='text-decoration-none' style={common}>About</NavLink>
            <NavLink to="/projects" className='text-decoration-none' style={common}>Projects</NavLink>
            <NavLink to="/contact" className='text-decoration-none' style={common}>Contact</NavLink>
            <NavLink to="/playlist" className='text-decoration-none' style={common}>Playlist</NavLink>
            <Button variant="danger" className="ms-2">YouTube</Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;

