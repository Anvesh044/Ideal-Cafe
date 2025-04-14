import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import SpinWheel from '../components/SpinWheel'; // Spinner component import

const offers = [
  {
    title: "🍦 Ice Cream Bonanza",
    description: "Buy 2 ice creams and get 1 free!",
    image: process.env.PUBLIC_URL + "/combo.png",
    moreInfo: "Applicable on any regular-sized ice creams. Free item will be of equal or lesser value."
  },
  {
    title: "👨‍👩‍👧‍👦 Family Pack Fiesta",
    description: "Get a family combo of 4 desserts at just ₹399!",
    image: process.env.PUBLIC_URL + "/1.jpg",
    moreInfo: "Choose from a mix of ice creams, sundaes, and kulfis. Perfect for a group of 4."
  },
  {
    title: "🌶️ Chaat Attack",
    description: "Flat 20% off on all chaat items after 5 PM!",
    image: process.env.PUBLIC_URL + "/chats1.jpg",
    moreInfo: "Valid between 5 PM - 9 PM every day. Discount auto-applied at checkout."
  },
  {
    title: "🍰 Dessert Duo Deal",
    description: "Order any 2 desserts and get a 50% discount on the 3rd!",
    image: process.env.PUBLIC_URL + "/duo.jpg",
    moreInfo: "Valid on cakes, brownies, and sundaes. Limited to 1 discounted item per order."
  },
  {
    title: "🎊 Weekend Special",
    description: "Get ₹100 off on orders above ₹500 every weekend!",
    image: process.env.PUBLIC_URL + "/weekend.jpg",
    moreInfo: "Offer automatically applied during Saturday and Sunday. Minimum order ₹500."
  },
];

function Offers() {
  const [showModal, setShowModal] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState(null);

  const handleGrabOffer = (offer) => {
    setSelectedOffer(offer);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedOffer(null);
  };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">🎁 Special Offers & Combos</h2>
      <Row>
        {offers.map((offer, index) => (
          <Col md={6} lg={4} className="mb-4" key={index}>
            <Card className="h-100 shadow-sm border-0" style={{ height: "550px" }}>
              <Card.Img
                variant="top"
                src={offer.image}
                style={{ height: "300px", objectFit: "cover" }}
              />
              <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                  <Card.Title>{offer.title}</Card.Title>
                  <Card.Text>{offer.description}</Card.Text>
                </div>
                <Button variant="success" onClick={() => handleGrabOffer(offer)}>
                  Grab Offer
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* 🎯 Spin the Wheel Game */}
      <SpinWheel />

      {/* Offer Modal */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>🎉 Offer Grabbed!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>{selectedOffer?.title}</h5>
          <p>{selectedOffer?.description}</p>
          <hr />
          <p><strong>Details:</strong> {selectedOffer?.moreInfo}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Offers;
