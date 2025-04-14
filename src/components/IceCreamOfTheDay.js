import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import './IceCreamOfTheDay.css'; // Add CSS import

// Reuse menuItems from Menu component or pass as prop
const menuItems = [
  { name: 'Gadbad', img: 'gadbad.jpeg', description: 'A colorful and creamy ice cream with fruits and dry fruits.' },
  { name: 'Tiramisu', img: 'tiramisu.jpg', description: 'A classic Italian dessert with coffee-soaked cake layers.' },
  { name: 'Dilkush', img: 'dilkush.jpg', description: 'A creamy mix of flavors with rich texture and sweetness.' },
  { name: 'Chocolate Dad', img: 'dad.jpg', description: 'Rich and creamy chocolate goodness.' },
  { name: 'Cashew Crunch', img: 'cashew.png', description: 'Crunchy cashews mixed with ice cream for a delightful treat.' },
  // Add more if needed
];

const IceCreamOfTheDay = () => {
  const [dailyItem, setDailyItem] = useState(null);

  useEffect(() => {
    const today = new Date().toDateString();
    const storedData = JSON.parse(localStorage.getItem('iceCreamOfTheDay'));

    if (storedData && storedData.date === today) {
      setDailyItem(storedData.item);
    } else {
      const randomIndex = Math.floor(Math.random() * menuItems.length);
      const selectedItem = menuItems[randomIndex];
      localStorage.setItem('iceCreamOfTheDay', JSON.stringify({ date: today, item: selectedItem }));
      setDailyItem(selectedItem);
    }
  }, []);

  if (!dailyItem) return null;

  return (
    <Container className="my-5">
      <h3 className="text-center mb-4 ice-cream-title">🍦 Ice Cream of the Day 🍦</h3>
      <Card className="mx-auto ice-cream-card" style={{ maxWidth: '400px' }}>
        <Card.Img variant="top" src={dailyItem.img} alt={dailyItem.name} className="ice-cream-image" />
        <Card.Body className="text-center">
          <Card.Title className="ice-cream-name">{dailyItem.name}</Card.Title>
          <Card.Text className="ice-cream-description">{dailyItem.description}</Card.Text>
          
        </Card.Body>
      </Card>
    </Container>
  );
};

export default IceCreamOfTheDay;
