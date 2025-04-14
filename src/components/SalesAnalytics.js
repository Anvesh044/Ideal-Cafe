// Filename: src/components/SalesAnalytics.js
import React from 'react';
import { Table, Card } from 'react-bootstrap';

const SalesAnalytics = () => {
  const salesData = [
    { date: "2025-04-12", totalSales: 5000, totalOrders: 50 },
    { date: "2025-04-13", totalSales: 6000, totalOrders: 60 },
    { date: "2025-04-14", totalSales: 7000, totalOrders: 70 },
  ];

  return (
    <Card>
      <Card.Header>
        <h4>Sales Analytics</h4>
      </Card.Header>
      <Card.Body>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Date</th>
              <th>Total Sales</th>
              <th>Total Orders</th>
            </tr>
          </thead>
          <tbody>
            {salesData.map((sale, idx) => (
              <tr key={idx}>
                <td>{sale.date}</td>
                <td>₹{sale.totalSales}</td>
                <td>{sale.totalOrders}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default SalesAnalytics;
