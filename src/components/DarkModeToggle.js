import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import './DarkModeToggle.css'; // Correct path if both JS and CSS are in components

function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load theme from localStorage on initial load
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.body.classList.add('dark-mode');
    }
  }, []);

  // Toggle theme and save the preference to localStorage
  const toggleTheme = () => {
    if (isDarkMode) {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    } else {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Button variant={isDarkMode ? 'light' : 'dark'} onClick={toggleTheme}>
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </Button>
  );
}

export default DarkModeToggle;
