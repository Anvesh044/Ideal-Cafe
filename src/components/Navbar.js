import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container, Form, FormControl, Button, Badge } from 'react-bootstrap';
import DarkModeToggle from './DarkModeToggle';  // Correct path if DarkModeToggle.js is in components

// Your Navbar code remains the same


import './Navbar.css'; // Make sure this path is correct

function CustomNavbar({ onSearch, cartItemCount = 0 }) {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
    navigate('/menu');
  };

  return (
    <Navbar className="custom-navbar" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src={process.env.PUBLIC_URL + '/logo1.png'} // Replace with your logo's path
            alt="Ideal Ice Cream Logo"
            style={{ width: '80px', height: '50px', marginRight: '10px' }} // Adjust size and spacing
          />
          Ideal Ice Cream
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/menu">Menu</Nav.Link>
            <Nav.Link as={Link} to="/offers">Offers</Nav.Link>
            <Nav.Link as={Link} to="/locations">Locations</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>

          <Form className="d-flex me-2" onSubmit={handleSearch}>
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button variant="outline-success" type="submit">Search</Button>
          </Form>

          <Nav className="align-items-center">
            <Nav.Link as={Link} to="/cart" className="d-flex align-items-center">
              {cartItemCount > 0 && (
                <Badge bg="light" text="dark" className="ms-1">
                  {cartItemCount}
                </Badge>
              )}
            </Nav.Link>
            <Nav.Link as={Link} to="/signin">Sign In</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
