// Order.js
import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "./CartProvider";
import "./Order.css";

function Order() {
  const [orderList, setOrderList] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch("https://json-server-vercel-one-coral.vercel.app/menu")
      .then((res) => res.json())
      .then((data) => setOrderList(data));
  }, []);

  return (
    <div className="container">
      {/* ... your existing Order component */}

      <button onClick={() => addToCart(item)} className="button">
        Add To Cart
      </button>

      {/* ... rest of your component */}
    </div>
  );
}

export default Order;
