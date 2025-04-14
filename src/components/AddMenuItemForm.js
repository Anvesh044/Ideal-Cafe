// Filename: src/components/AddMenuItemForm.js
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const AddMenuItemForm = () => {
  const [newItem, setNewItem] = useState({
    name: '',
    price: '',
    description: '',
    rating: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const addMenuItem = () => {
    // Logic to add new menu item
  };

  return (
    <Form>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter item name"
          name="name"
          value={newItem.name}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter price"
          name="price"
          value={newItem.price}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter description"
          name="description"
          value={newItem.description}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Rating</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter rating"
          name="rating"
          value={newItem.rating}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Button variant="success" onClick={addMenuItem}>Add Item</Button>
    </Form>
  );
};

export default AddMenuItemForm;
