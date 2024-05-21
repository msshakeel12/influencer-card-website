import React from 'react';
import './index.css'; // Import the CSS file

const HomePage = ({ onButtonClick }) => {
    return (
      <div className="home-page">
        <div>
          <button onClick={() => onButtonClick(1)}>Button 1</button>
          <button onClick={() => onButtonClick(2)}>Button 2</button>
        </div>
      </div>
    );
  };

export default HomePage;