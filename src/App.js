import React, { useState } from 'react';
import './App.css';
import About from './webpages/About';
import Home from './webpages/Home';
import { Image } from 'react-native';

function App() {
  const [currentPage, setCurrentPage] = useState('home'); // Initial page is 'home'

  const handlePageChange = (page) => {
    setCurrentPage(page.toLowerCase()); // Convert the page name to lowercase
  };

  return (
    <div>
      <nav className="navbar">
        <ul>
          <li>
          <li>
  <Image source={require('./images/eye-removebg-preview.png')} style={{ width: 70, height: 70, marginTop: '-30%', marginLeft: '-10%' }} />
</li>
          </li>
          <li
            onMouseOver={() => (document.body.style.cursor = 'pointer')}
            onClick={() => handlePageChange('home')}
          >
            Home
          </li>
          <li 
            onMouseOver={() => (document.body.style.cursor = 'pointer')}
            onClick={() => handlePageChange('about')}>
            About Us
          </li>
          <li 
          onMouseOver={() => (document.body.style.cursor = 'pointer')}
          onClick={() => handlePageChange('donate')}>Donate</li>
        </ul>
      </nav>

      {/* Render the current page based on the state */}
      {currentPage === 'home' && <Home />}
      {currentPage === 'about' && <About />}
      {/* Add more pages as needed */}
    </div>
  );
}

export default App;
