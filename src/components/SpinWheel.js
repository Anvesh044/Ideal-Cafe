import React, { useState } from 'react';
import './SpinWheel.css';

import { Button } from 'react-bootstrap';

const SpinWheel = () => {
  const prizes = [
    'Free Ice Cream 🍦',
    '10% Off 💸',
    'Buy 1 Get 1 🎉',
    '20% Off 🔥',
    'Free Chaat 🌶️',
    'Better Luck Next Time 😢',
  ];

  const colors = [
    '#ff6384', '#36a2eb', '#ffcd56',
    '#4bc0c0', '#9966ff', '#ff9f40',
  ];

  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [winner, setWinner] = useState('');

  const spin = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    const randomIndex = Math.floor(Math.random() * prizes.length);
    const anglePerPrize = 360 / prizes.length;
    const newRotation = 360 * 5 + (360 - randomIndex * anglePerPrize - anglePerPrize / 2);
    setRotation(newRotation);

    setTimeout(() => {
      setWinner(prizes[randomIndex]);
      setIsSpinning(false);
    }, 4000);
  };

  return (
    <div className="wheel-container">
      <h3 className="mb-4">🎯 Spin the Wheel & Win!</h3>
      <div className="wheel" style={{ transform: `rotate(${rotation}deg)` }}>
        {prizes.map((prize, index) => (
          <div
            key={index}
            className="segment"
            style={{
              transform: `rotate(${(360 / prizes.length) * index}deg) skewY(-60deg)`,
              backgroundColor: colors[index % colors.length],
            }}
          >
            <span>{prize}</span>
          </div>
        ))}
      </div>
      <Button className="mt-4 btn-warning" onClick={spin} disabled={isSpinning}>
        {isSpinning ? 'Spinning...' : 'Spin Now'}
      </Button>
      {winner && (
        <div className="mt-3 text-success fw-bold fs-5">
          🎉 Congratulations! You won: <span className="text-decoration-underline">{winner}</span>
        </div>
      )}
    </div>
  );
};

export default SpinWheel;
