import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-light text-center py-3">
      <Container>
        <h3>Hours of Operation</h3>
        <p>Monday-Saturday</p>
        <p>09:00am-05:00pm</p>
        <p>&copy; {new Date().getFullYear()} Ideal Café. All rights reserved.</p>
        
      </Container>
    </footer>
  );
}

export default Footer;
