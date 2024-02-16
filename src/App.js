import React from "react";
import NavBar from "./NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";
import Order from "./Order";


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/Orders" element={<Order/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route exact path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;