import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';

const data = {
  icecreams: [
    "Vanilla Delight", "Chocolate Fudge", "Mango Madness", "Strawberry Swirl"
  ],
  chats: [
    "Pani Puri", "Bhel Puri", "Sev Puri", "Dahi Chaat"
  ]
};

function SearchResults({ searchTerm }) {
  const lower = searchTerm.toLowerCase();
  const icecreams = lower.includes("ice") ? data.icecreams : [];
  const chats = lower.includes("chat") ? data.chats : [];

  return (
    <Container className="my-5">
      <h3>Search Results for: <em>{searchTerm}</em></h3>
      <Row>
        {icecreams.length > 0 && (
          <Col md={6}>
            <h4>Ice Creams</h4>
            {icecreams.map((item, idx) => (
              <Card className="mb-3" key={idx}><Card.Body>{item}</Card.Body></Card>
            ))}
          </Col>
        )}

        {chats.length > 0 && (
          <Col md={6}>
            <h4>Chats</h4>
            {chats.map((item, idx) => (
              <Card className="mb-3" key={idx}><Card.Body>{item}</Card.Body></Card>
            ))}
          </Col>
        )}
      </Row>

      {(icecreams.length === 0 && chats.length === 0) && (
        <p>No matching items found.</p>
      )}
    </Container>
  );
}

export default SearchResults;
