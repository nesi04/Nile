import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../features/cart/cartSlice';
import { Link } from 'react-router-dom';
import "./cart.css"

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items) || []; // Default to an empty array if no items
  const dispatch = useDispatch();

  const handleRemoveCart = (item) => {
    dispatch(removeFromCart(item));
  };

  const removeAll = () => {
    dispatch(clearCart());
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <h3>{item.title}</h3>
            <p>Quantity: {item.quantity}</p>
            <p>Total Price: ${item.quantity * item.price}</p>
            <button onClick={() => handleRemoveCart(item)}>Remove</button>
            
          </div>
        ))
      )}
      {cartItems.length > 0 && (
        <>
          <div className="cart-total">
            <h3>Total price: ${totalPrice}</h3>
          </div>
          <button className="removeAll" onClick={removeAll}>Remove all</button>
          <Link className="check" to="/checkout">To checkout</Link>
        </>
      )}
    </div>
  );
};

export default Cart;

