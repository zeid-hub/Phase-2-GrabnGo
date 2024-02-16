import React, { useEffect, useState, useContext } from "react";
 import { CartContext } from "./CartContext";
import "./Order.css"

function Order() {
  const [orderList, setOrderList] = useState([]);
  const { addToCart } = useContext(CartContext); // Use useContext here

  // 1. Fetch the order list data from an "API"
  useEffect(() => {
    fetch("https://json-server-vercel-one-coral.vercel.app/menu")
      .then((res) => res.json())
      .then((data) => setOrderList(data));
  }, []);

  return (
    <div className="container">
      <h1 className="header">
        OUR <span className="span">MENU</span>
      </h1>
      <div className="inner-container">
        <p className="Parag">
          Explore our extensive <span className="highlight">menu</span> together with us, featuring a wide range of snacks to satisfy every craving. With just a few taps, you can select your desired items,customize your order, and proceed to checkout, all without leaving
          the comfort of your home.
        </p>
      </div>
      <ul className="list">
        {orderList.map((item) => (
          <li key={item.id}>
            <h2 className="inner-header">
              <span className="name">Name:</span> {item.title}
            </h2>
            
            <img className="image" src={item.image} alt={item.title} />
            <h4 className="quantity">
              Quantity:
              <input
                type="number"
                value={item.qnty}
                onChange={(e) => {
                  console.log(e.target.value);
                }}
              />
            </h4>
            <h3 className="price">Price: {item.price}$</h3>
            <button onClick={() => addToCart(item)} className="button">
              Add To Cart
            </button>
          </li>
        ))}
      </ul>
      {/* Include Cart component to display the cart
      <Cart /> */}
    </div>
  );
}

export default Order;