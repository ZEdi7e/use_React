import React from 'react';
import Stars from './Stars';

function Product({ product }) {
  const handleDoubleClick = ( e ) => {
    e.target.closest('.product-card').remove();
  };

  return (
    <div className="product-card" onDoubleClick={handleDoubleClick}>
      <img src={ product.thumbnail } alt={ product.title } />
      <h3>{ product.title }</h3>
      <p>Price: {product.price} $</p>
      <Stars rating = { product.rating } />
    </div>
  );
}

export default Product;
