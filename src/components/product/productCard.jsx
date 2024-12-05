import React from 'react'
import "./productCard.css"
import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/cart/cartSlice';

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
    const handleAddToCart =()=>{
         dispatch(addToCart(product));
    };
    return (
      <div className="product-card">
        {product.image && (
          <img
            src={product.image}
            alt={product.title}
            className="product-image"
          />
        )}
        <h4 className="product-title">{product.title}</h4>
        
        <p className="product-price">${product.price}</p>
        <button className="add-to-cart-btn" onClick={handleAddToCart}>Add to Cart</button>
      </div>
    );
  };
  

export default ProductCard