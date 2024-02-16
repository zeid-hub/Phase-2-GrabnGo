import React from "react";
import NavBar from "./NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Order from "./Order";
import Cart from "./Cart";



function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/order" element={<Order/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route exact path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;