// index.js or your root component
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CartProvider } from "./CartProvider";

ReactDOM.render(
  <CartProvider>
    <App />
  </CartProvider>,
  document.getElementById("root")
);
