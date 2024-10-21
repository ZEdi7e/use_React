import React from 'react';

const Stars = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span key={i} className={`fa fa-star${i <= rating ? ' active' : ''}`}></span>
    );
  }

  return <div>{stars}</div>;
};

export default Stars;
