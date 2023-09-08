// import React from 'react';

export const Product = ({ name, price, description }) => {
  return (
    <div>
      <p> product: {name}</p>
      <p>price: {price}</p>
      <p>description: {description}</p>
    </div>
  );
};
