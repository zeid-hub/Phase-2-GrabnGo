// NavBar.js
import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="navbar">
      <NavLink to="/" className="home">
        <span className="text">Home</span>
      </NavLink>
      <NavLink to="/order" className="orders">
        <span className="text">Order</span>
      </NavLink>
      <NavLink to="/about" className="about-us"> {/* Updated path to "/about" */}
        <span className="text">About Us</span>
      </NavLink>
      <NavLink to="/cart" className="cart">
        <span className="text">Cart</span>
      </NavLink>
    </div>
  );
}

export default NavBar;
