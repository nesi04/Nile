import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts} from '../../features/products/productSlice'
import ProductCard from './productCard';  // Import the ProductCard component

const ProductList = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.products);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Failed to load products.</div>;
  }

  return (
    <div className="product-list">
      {items.map((product) => (
        <ProductCard key={product.id} product={product} />  // Render ProductCard for each product
      ))}
    </div>
  );
};

export default ProductList;
