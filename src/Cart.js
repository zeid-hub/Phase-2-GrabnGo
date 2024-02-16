import React, { useContext } from "react";
import "./Cart.css";
import { CartContext } from "./CartContext";

function Cart() {
  const { cart, addToCart, removeFromCart, clearCart } = useContext(CartContext);

  // Function to handle the buy process
  const handleBuy = () => {
    // Implement your buy logic here
    alert("Buy process initiated. Thank you for your purchase!");
    clearCart(); // Clear the cart after buying using clearCart from CartContext
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
              {/* <span>{cartItem.image}$</span> */}
              <span>{cartItem.price}$</span>
              <span>{cartItem.quantity}</span>
              <button onClick={() => removeFromCart(cartItem.id)} className="button">Remove</button>
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