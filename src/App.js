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
    <div >
      <nav className="navbar" >
        <ul style={{marginLeft: '-21%', marginTop:'1.2%'}}>
          <li >
            <Image source={require('./images/eye-removebg-preview.png')} style={{ width: 70, height: 70, marginTop: '-30%' }} />
          </li>
          <li
            onMouseOver={() => (document.body.style.cursor = 'pointer')}
            onClick={() => handlePageChange('home')}
            style={{fontSize:'25px'}}
          >
            Home
          </li>
          <li 
            onMouseOver={() => (document.body.style.cursor = 'pointer')}
            onClick={() => handlePageChange('about')}
            style={{fontSize:'25px'}}>
            About Us
          </li>
          <li 
          onMouseOver={() => (document.body.style.cursor = 'pointer')}
          onClick={() => handlePageChange('donate')}
          style={{fontSize:'25px'}}>Donate</li>
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
