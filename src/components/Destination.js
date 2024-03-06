import React from 'react';

function Destination ({ destinations }) {
  return (
    <div className="destinations">
      {destinations.map(destination => (
        <div key={destination.id} className="destination">
          <img src={destination.image} alt={destination.name} />
          <h3>{destination.name}</h3>
          <p>{destination.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Destination;
