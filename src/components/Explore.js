import React, { useState, useEffect } from 'react';

function Explore() {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    fetchDestinations();
  }, []);

  const fetchDestinations = async () => {
    try {
      const response = await fetch('/api/destinations');
      const data = await response.json();
      setDestinations(data);
    } catch (error) {
      console.error('Error fetching destinations:', error);
    }
  };

  return (
    <div>
      <h2>Explore</h2>
      <ul>
        {destinations.map(destination => (
          <li key={destination.id}>
            <h3>{destination.name}</h3>
            <p>{destination.description}</p>
            {/* Additional details about the destination */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Explore;
