import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import NavLink from 'react-bootstrap/esm/NavLink';

const Header = () => {

  const common = {                
     marginRight:15,
     fontSise:17,
     letterSpacing:".5px"
  }
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand className='mt-2 h2_right' href="#home"  style={{color:"#6c63ff"}}>
            Dewmi Silva
          </Navbar.Brand>
          <Nav className="ml-auto">
            <NavLink to="/" className='text-decoration-none' style={common}>Home</NavLink>
            <NavLink to="/about" className='text-decoration-none' style={common}>About</NavLink>
            <NavLink to="/project" className='text-decoration-none' style={common}>Projects</NavLink>
            <NavLink to="/contact" className='text-decoration-none' style={common}>Contact</NavLink>
            <NavLink to="/playlist" className='text-decoration-none' style={common}>Playlist</NavLink>
            <Button variant="danger" className="ml-2">YouTube</Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
