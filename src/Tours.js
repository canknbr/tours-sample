import React from 'react';
import Tour from './Tour';
const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div>
        {tours.map(tour => (
          <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>
        ))}
      </div>
    </section>
  );
};

export default Tours;
