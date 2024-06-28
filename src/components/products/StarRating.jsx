import React from 'react';

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="star-rating">
      {Array(fullStars)
        .fill()
        .map((_, index) => (
          <i key={index} className="fas fa-star text-amber-500"></i>
        ))}
      {halfStar && <i className="fas fa-star-half-alt text-amber-500"></i>}
      {Array(emptyStars)
        .fill()
        .map((_, index) => (
          <i key={index} className="far fa-star text-amber-500"></i>
        ))}
    </div>
  );
};


export default StarRating;