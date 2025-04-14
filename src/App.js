import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import CustomNavbar from './components/Navbar'; // Navbar component
import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import Offers from './pages/Offers';
import Locations from './pages/Locations';
import SignIn from './pages/SignIn';
import AdminDashboard from './pages/AdminDashboard'; // NEW: Admin dashboard import
import SpinWheel from './components/SpinWheel';

import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [cartItems, setCartItems] = useState([]); // Cart items state

  return (
    <Router>
      <CustomNavbar 
        onSearch={setSearchTerm} 
        cartItemCount={cartItems.length} 
      />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/menu" 
          element={<Menu searchTerm={searchTerm} setCartItems={setCartItems} />} 
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/admin" element={<AdminDashboard />} /> {/* ✅ Admin route */}
        import SpinWheel from './components/SpinWheel';


        {/* Optional: Add a Cart page later if needed */}
        {/* <Route path="/cart" element={<Cart cartItems={cartItems} />} /> */}
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
