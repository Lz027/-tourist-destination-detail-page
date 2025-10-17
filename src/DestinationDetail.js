// src/DestinationDetail.js
import React, { useState } from 'react';
import './DestinationDetail.css';
import zermattImage from './images/Zermatt.jpg'; // Import image here

const DestinationDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const pricePerItem = 1000; // Example price
  const totalAmount = quantity * pricePerItem;

  const handleIncrement = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <div className="destination-detail">
      <div className="header">
        <h1>Zermatt, Switzerland</h1>
        <p>24°C</p>
      </div>
      <div className="description">
        <h2>Discover the Beauty of Zermatt</h2>
        <p>Experience stunning landscapes, charming villages, and rich culture in Zermatt!</p>
        <img src={zermattImage} alt="Zermatt" style={{ width: '100%', maxWidth: '400px', borderRadius: '10px' }} />
      </div>
      <div className="pricing">
        <div className="quantity-control">
          <button onClick={handleDecrement}>-</button>
          <span>{quantity}</span>
          <button onClick={handleIncrement}>+</button>
        </div>
        <h3>Total Amount: ${totalAmount}</h3>
      </div>
      <button className="book-button">Book Now</button>
    </div>
  );
};

export default DestinationDetail;