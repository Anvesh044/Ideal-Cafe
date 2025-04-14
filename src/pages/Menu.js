import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Modal,
  Form,
  Dropdown
} from 'react-bootstrap';
import IceCreamOfTheDay from '../components/IceCreamOfTheDay';  // If components are in a parent folder


import './Menu.css';

const menuItems = [
  { name: 'Gadbad', img: 'gadbad.jpeg', description: 'A colorful and creamy ice cream with fruits and dry fruits.', rating: 5, price: 135, popularity: 10 },
  { name: 'Tiramisu', img: 'tiramisu.jpg', description: 'A classic Italian dessert with layers of coffee-soaked cake and mascarpone cheese.', rating: 4, price: 145, popularity: 15 },
  { name: 'Dilkush', img: 'dilkush.jpg', description: 'A creamy mix of flavors with rich texture and sweetness.', rating: 5, price: 120, popularity: 20 },
  { name: 'Chocolate Dad', img: 'dad.jpg', description: 'Indulge in rich and creamy chocolate with every bite.', rating: 4, price: 110, popularity: 5 },
  { name: 'Banana Split', img: 'banana.jpg', description: 'Bananas, ice cream, and a drizzle of chocolate make the perfect combination.', rating: 4, price: 105, popularity: 8 },
  { name: 'Cashew Crunch', img: 'cashew.png', description: 'Crunchy cashews mixed with ice cream for a delightful treat.', rating: 5, price: 115, popularity: 12 },
  { name: 'Masala Puri', img: 'masala.jpg', description: 'Spicy, tangy, and crunchy masala puris with chutneys.', rating: 4, price: 60, popularity: 7 },
  { name: 'Pani Puri', img: 'pani.png', description: 'Crispy puris filled with tangy water, potatoes, and chickpeas.', rating: 5, price: 50, popularity: 25 },
  { name: 'Neer dose with Gheerhost', img: 'neer.jpg', description: 'Authentic mangalore preparation, stunning combination.', rating: 4, price: 100, popularity: 6 },
  { name: 'iPizza', img: 'ipizza.jpg', description: 'A cold blended Pizza, something very unique.', rating: 4, price: 135, popularity: 4 },
  { name: 'Samosa Chat', img: 'samosa.jpg', description: 'Crispy samosas topped with yogurt and chutneys for a tangy flavor.', rating: 4, price: 45, popularity: 9 },
  { name: 'Chole Batura', img: 'chole.jpg', description: 'A hearty combination of spiced chickpeas and deep-fried bread.', rating: 5, price: 80, popularity: 18 },
  { name: 'Marzi Pan', img: 'pan1.png', description: 'A popular treat with crispy elements and spicy fillings.', rating: 3, price: 60, popularity: 2 },
  { name: 'Cutlet', img: 'cutlet.jpg', description: 'A crispy, deep-fried patty made with potatoes and spices.', rating: 4, price: 30, popularity: 10 }
];

function Menu({ searchTerm }) {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [orderDetails, setOrderDetails] = useState({ name: '', contact: '', deliveryOption: 'Home' });
  const [showOrderSuccess, setShowOrderSuccess] = useState(false);
  const [itemAddedMessage, setItemAddedMessage] = useState('');
  const [sortOption, setSortOption] = useState(null);

  const addToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.name === item.name);
    if (existingItem) {
      existingItem.quantity += 1;
      setCart([...cart]);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
    setItemAddedMessage(`${item.name} added to cart!`);
    setTimeout(() => setItemAddedMessage(''), 3000);
  };

  const removeFromCart = (item) => {
    const updatedCart = cart.map(cartItem =>
      cartItem.name === item.name
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    ).filter(cartItem => cartItem.quantity > 0);
    setCart(updatedCart);
  };

  const handlePlaceOrder = () => {
    setShowCart(false);
    setShowOrderSuccess(true);
    setCart([]);
    setOrderDetails({ name: '', contact: '', deliveryOption: 'Home' });
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setOrderDetails({ ...orderDetails, [name]: value });
  };

  const filteredItems = searchTerm
    ? menuItems.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : menuItems;

  // Sort items based on the selected option
  const sortedItems = sortOption
    ? [...filteredItems].sort((a, b) => {
        if (sortOption === 'rating') return b.rating - a.rating;
        if (sortOption === 'price') return a.price - b.price;
        if (sortOption === 'popularity') return b.popularity - a.popularity;
        return 0;
      })
    : filteredItems;

  // Calculate total amount
  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Our Menu</h2>
      <IceCreamOfTheDay />

      {/* Sort By Button */}
      <div className="d-flex justify-content-end mb-3">
        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="sort-dropdown">
            Sort By
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => setSortOption('rating')}>Rating</Dropdown.Item>
            <Dropdown.Item onClick={() => setSortOption('price')}>Price</Dropdown.Item>
            <Dropdown.Item onClick={() => setSortOption('popularity')}>Popularity</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={() => setSortOption(null)}>Clear Sort</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <Row>
        {sortedItems.length === 0 ? (
          <Col>
            <p className="text-center">No items match your search.</p>
          </Col>
        ) : (
          sortedItems.map((item, index) => (
            <Col md={4} sm={6} className="mb-4" key={index}>
              <Card>
                <Card.Img variant="top" src={item.img} alt={item.name} />
                <Card.Body>
                  <Card.Title className="text-center">{item.name}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                  <p className="text-center font-weight-bold">₹{item.price}</p>
                  <Button onClick={() => addToCart(item)} className="w-100" variant="primary">Add to Cart</Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>

      {/* Item Added Message */}
      {itemAddedMessage && (
        <div className="alert alert-success fixed-top m-3" role="alert">
          {itemAddedMessage}
        </div>
      )}

      {/* Cart Modal */}
      <Modal show={showCart} onHide={() => setShowCart(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Your Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              {cart.map((item, idx) => (
                <div key={idx} className="d-flex justify-content-between align-items-center mb-2">
                  <div>
                    <strong>{item.name}</strong> (₹{item.price}) x {item.quantity}
                  </div>
                  <div>
                    <Button size="sm" variant="danger" onClick={() => removeFromCart(item)}>-</Button>{' '}
                    <Button size="sm" variant="success" onClick={() => addToCart(item)}>+</Button>
                  </div>
                </div>
              ))}
              <hr />
              <div className="d-flex justify-content-between">
                <strong>Total:</strong>
                <span>₹{totalAmount}</span>
              </div>
              <Form>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={orderDetails.name}
                    onChange={handleFormChange}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Contact Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="contact"
                    value={orderDetails.contact}
                    onChange={handleFormChange}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Delivery Option</Form.Label>
                  <Form.Control
                    as="select"
                    name="deliveryOption"
                    value={orderDetails.deliveryOption}
                    onChange={handleFormChange}
                  >
                    <option value="Home">Home</option>
                    <option value="Pick-up">Pick-up</option>
                  </Form.Control>
                </Form.Group>
              </Form>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowCart(false)}>Close</Button>
          {cart.length > 0 && (
            <Button variant="success" onClick={handlePlaceOrder}>Place Order</Button>
          )}
        </Modal.Footer>
      </Modal>

      {/* Order Success Modal */}
      <Modal show={showOrderSuccess} onHide={() => setShowOrderSuccess(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Order Placed!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Your order has been placed successfully!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setShowOrderSuccess(false)}>OK</Button>
        </Modal.Footer>
      </Modal>

      {/* Cart Floating Button */}
      <Button
        variant="warning"
        onClick={() => setShowCart(true)}
        className="position-fixed bottom-0 end-0 m-3 rounded-circle d-flex align-items-center justify-content-center"
        style={{
          width: '80px',
          height: '80px',
          fontSize: '32px',
          zIndex: 1055,
          boxShadow: '0 6px 16px rgba(0, 0, 0, 0.3)'
        }}
      >
        🛒 {cart.reduce((acc, item) => acc + item.quantity, 0)}
      </Button>
    </Container>
  );
}

export default Menu;
