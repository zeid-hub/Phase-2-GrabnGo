import React from "react";
import NavBar from "./NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";



function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;