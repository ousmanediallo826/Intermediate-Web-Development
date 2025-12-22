import React from 'react';

const Card = ({ image, title, location }) => {
  return (
    <div className="card">
      {image && <img src={image} alt={title} />}
      <h3>{title}</h3>
      <p>{location}</p>
    </div>
  );
}

export default Card;
