import React, { useState, useEffect } from 'react';

const Tour = ({ id, info, image, name, price, removeTour }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <artice className="single-tour" key={id}>
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">{price}</h4>
        </div>
        <p>
          {showInfo ? info : `${info.substring(0, 100)}...`}
          <button onClick={() => setShowInfo(!showInfo)}>
            {showInfo ? 'less more' : 'read more'}
          </button>
        </p>
        <button onClick={() => removeTour(id)} className="delete-btn">
          delete tour
        </button>
      </footer>
    </artice>
  );
};

export default Tour;
