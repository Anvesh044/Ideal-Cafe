// Filename: src/components/AdminDashboard.js
import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, Table, Card } from 'react-bootstrap';
import AddMenuItemForm from '../components/AddMenuItemForm';  // Import the form component
import SalesAnalytics from '../components/SalesAnalytics';   // Import the sales analytics component

const AdminDashboard = () => {
  // Admin dashboard logic
  return (
    <Container className="my-5">
      <Row>
        <Col md={6}>
          <AddMenuItemForm />
        </Col>
        <Col md={6}>
          <SalesAnalytics />
        </Col>
      </Row>
    </Container>
  );
};

export default AdminDashboard;
