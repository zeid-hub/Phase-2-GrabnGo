// App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Order from "./Order";
import Cart from "./Cart";
import About from "./About";
import { CartProvider } from "./CartProvider";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/order" element={<Order />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} /> {/* Updated path to "/about" */}
          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;
