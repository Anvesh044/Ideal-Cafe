import React, { useState } from 'react';
import {
  Button,
  Modal,
  Form,
  Carousel,
  Card,
  Container,
  Row,
  Col
} from 'react-bootstrap';

import './Menu.css'; // Optional, if you have it
import './Home.css';

function Home() {
  return (
    <div>
      {/* Carousel Section */}
      <Carousel interval={2000}>
        <Carousel.Item>
          <img className="d-block w-100" src="ideal.png" alt="Award Winning" />
          <Carousel.Caption className="carousel-caption-black">
            <h3>Award-Winning Excellence</h3>
            <p>
              Celebrated for taste and tradition – recognized for our quality and service over the years.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src="milk.jpg" alt="Mangaluru Pride" />
          <Carousel.Caption className="carousel-caption-black">
            <h3>The Taste of Mangaluru</h3>
            <p>
              An iconic part of the city – Ideal Ice Cream is Mangaluru’s sweetest pride.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src="family.png" alt="Diverse Offerings" />
          <Carousel.Caption className="carousel-caption-black">
            <h3>Something for Everyone</h3>
            <p>
              From classic desserts to new delights, explore the variety that makes Ideal unique.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Description Section with Border */}
      <Container className="my-5 about-section">
        <h2 className="text-center mb-4">About Ideal Cafe</h2>
        <p className="text-center px-3" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
          Established in the heart of Mangaluru, Ideal Cafe has been a beloved destination for generations.
          Known for its warm ambiance and signature treats, the cafe blends tradition with innovation—
          serving everything from classic ice creams to delightful snacks and beverages. Whether you're
          catching up with friends or enjoying a quiet evening, Ideal Cafe promises a memorable experience
          with every visit.
        </p>
      </Container>

      {/* Best Seller Section */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Our Best Sellers</h2>
        <Row>
          <Col md={4} className="mb-4">
            <Card className="best-seller">
              <Card.Img variant="top" src="gadbad.jpeg" />
              <Card.Body>
                <Card.Title>Gadbad 🌈</Card.Title>
                <Card.Text>
                  A Mangaluru original! A colorful layered ice cream dessert packed with jelly, fruits, and crunchy dry fruits.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card className="best-seller">
              <Card.Img variant="top" src="tiramisu.jpg" />
              <Card.Body>
                <Card.Title>Tiramisu ☕</Card.Title>
                <Card.Text>
                  An Italian classic with a twist — soft layers of sponge, cream, and a coffee kick, served chilled.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card className="best-seller">
              <Card.Img variant="top" src="dilkush.jpg" />
              <Card.Body>
                <Card.Title>Dilkush 🍰</Card.Title>
                <Card.Text>
                  A royal dessert that lives up to its name — rich, creamy, and guaranteed to melt hearts.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Customer Testimonials Section */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Customer Testimonials</h2>
        <Row>
          <Col md={4} className="mb-4">
            <Card className="testimonial">
              <Card.Body>
                <Card.Title>John Doe ⭐⭐⭐⭐⭐</Card.Title>
                <Card.Text>
                  "Ideal Cafe is my go-to spot for the best ice creams in Mangaluru. The ambiance is always welcoming and the staff is friendly."
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card className="testimonial">
              <Card.Body>
                <Card.Title>Jane Smith ⭐⭐⭐⭐⭐</Card.Title>
                <Card.Text>
                  "I love the variety of desserts here! The quality is exceptional, and every visit is a treat. My favorite is their Gadbad!"
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card className="testimonial">
              <Card.Body>
                <Card.Title>Sam Wilson ⭐⭐⭐⭐⭐</Card.Title>
                <Card.Text>
                  "If you're ever in Mangaluru, don't miss out on Ideal Cafe. It's a true gem, serving the finest desserts and ice creams!"
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Exclusive Offers Section */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Exclusive Offers</h2>
        <Row>
          <Col md={4} className="mb-4">
            <Card className="offer">
              <Card.Body>
                <Card.Title>Buy 1 Get 1 Free 🍦</Card.Title>
                <Card.Text>
                  Buy any ice cream and get another one free! A special offer for the ice cream lovers.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card className="offer">
              <Card.Body>
                <Card.Title>Combo Deals 🍧</Card.Title>
                <Card.Text>
                  Get a combo of ice cream and snacks at a discounted price. Perfect for a family outing.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card className="offer">
              <Card.Body>
                <Card.Title>Happy Hour Offer 🕔</Card.Title>
                <Card.Text>
                  Visit us during happy hours and enjoy a 20% discount on all ice creams and beverages.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
