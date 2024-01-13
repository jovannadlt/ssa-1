import React, { useState } from 'react';
import './App.css';
import About from './webpages/About'; // Import the About component

function App() {
  const [currentPage, setCurrentPage] = useState('home'); // Initial page is 'home'

  const handlePageChange = (page) => {
    setCurrentPage(page);
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
      {currentPage === 'home' && <div>Home Page Content</div>}
      {currentPage === 'about' && <About />} {/* Render the About component */}
      {currentPage === 'donate' && <div>Donate Page Content</div>}
    </div>
  );
}

export default App;
