// Cart.js
import React, { useContext } from "react";
import "./Cart.css";
import { CartContext } from "./CartProvider";

function Cart() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  const handleBuy = () => {
    alert("Buy process initiated. Thank you for your purchase!");
    clearCart();
  };

  return (
    <div className="cart-section">
      <h2 className="topic">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="paragraph">Your cart is empty</p>
      ) : (
        <ul className="items">
          {cart.map((cartItem) => (
            <li key={cartItem.id} className="item">
              <span>{cartItem.title}</span>
              <span>{cartItem.price}$</span>
              <span>{cartItem.quantity}</span>
              <button onClick={() => removeFromCart(cartItem.id)} className="button">
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      {cart.length > 0 && (
        <button onClick={handleBuy} className="buy-button">
          Buy
        </button>
      )}
    </div>
  );
}

export default Cart;
