import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import "./checkout.css"
const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty. Go back to the <Link to="/">Shopping Cart</Link> to add items.</p>
      ) : (
        <div className='contain'>
          <h3>Review Your Items</h3>
          {cartItems.map((item) => (
            <div key={item.id} className="checkout-item">
              <h4>{item.title}</h4>
              <p>Quantity: {item.quantity}</p>
              <p>Total Price: ${item.quantity * item.price}</p>
            </div>
          ))}
          <div className="checkout-total">
            <h3>Total Price: ${totalPrice}</h3>
          </div>
          <button onClick={() => alert("Thank you for your purchase!")}>Complete Purchase</button>
        </div>
      )}
      <Link to="/special">OR check this out 😋</Link>
    </div>
  );
};

export default Checkout;
