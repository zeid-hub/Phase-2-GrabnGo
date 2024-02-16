import React, { useState } from "react";
import './Form.css';

function SearchBar() {
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Assuming some function to fetch price based on location
    fetchPrice(location);
  };

  const fetchPrice = (location) => {
    // Here you would implement logic to fetch the price based on the location
    // For demonstration purposes, let's assume the price is retrieved from an API
    // Replace this with your actual fetch logic
    const mockPrice = Math.floor(Math.random() * 100) + 1; // Random price between 1 and 100
    setPrice(mockPrice);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter your location"
            className="input-field"
          />
        </label>
        <button type="submit" className="submit-button">Submit</button>
      </form>
      {price !== null && (
        <p className="price-display">
          Price to {location}: ${price}
        </p>
      )}
    </div>
  );
}

export default SearchBar;