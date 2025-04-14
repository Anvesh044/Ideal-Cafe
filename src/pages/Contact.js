import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Contact() {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Get in Touch</h2>
      <Row>
        {/* Contact Form */}
        <Col md={6}>
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Write your message..." />
            </Form.Group>

            <Button variant="dark" type="submit">
              Send Message
            </Button>
          </Form>
        </Col>

        {/* Contact Details */}
        <Col md={6}>
          <div className="p-3 bg-light border rounded">
            <h5>📍 Address</h5>
            <p>Ideal Café, Hampankatta, Mangaluru, Karnataka 575001</p>

            <h5>📞 Phone</h5>
            <p>+91 824 2428 888</p>

            <h5>📧 Email</h5>
            <p>contact@idealicecream.com</p>

            <h5>🗺️ Location</h5>
            <iframe
              title="Ideal Cafe Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.9815933693674!2d74.84270137480441!3d12.857271917076168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35a1f535a77e1%3A0x78ec13cb979f40cd!2sIdeal%20Cafe!5e0!3m2!1sen!2sin!4v1682329567201!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
