import React, { useState } from 'react';
import './App.css';
import About from './webpages/About';
import Home from './webpages/Home';

function App() {
  const [currentPage, setCurrentPage] = useState('home'); // Initial page is 'home'

  const handlePageChange = (page) => {
    setCurrentPage(page.toLowerCase()); // Convert the page name to lowercase
  };

  return (
    <div>
      <nav>
        <ul>
          <li onClick={() => handlePageChange('home')}>Home</li>
          <li onClick={() => handlePageChange('about')}>About Us</li>
          <li onClick={() => handlePageChange('donate')}>Donate</li>
        </ul>
      </nav>

      {/* Render different components based on the current page */}
      {currentPage === 'home' &&  <Home />} 
      {currentPage === 'about' && <About />} 
      {currentPage === 'donate' && <div>Donate Page Content</div>}
    </div>
  );
}

export default App;
