// Home.js
import React, { useState, useEffect } from 'react';

function Home() {
  // Add any necessary state variables or functions here
  
  // Example state variable
  const [user, setUser] = useState(null);

  // Example function to fetch user data
  const fetchUserData = () => {
    // Make API request to fetch user data
    // Replace this with your actual API call
    fetch('/api/user')
      .then(response => response.json())
      .then(data => setUser(data))
      .catch(error => console.error('Error fetching user data:', error));
  };

  useEffect(() => {
    // Fetch user data when the component mounts
    fetchUserData();
  }, []);

  return (
    <div className="home-container">
      <h1>TravelXperience</h1>
      <p>Explore. Plan. Experience. Your journey starts here.</p>     
      {/* Render user-specific content if user is logged in */}
      {user ? (
        <div>
          <p>Hello, {user.username}!</p>
          <p>Explore our curated destinations and start planning your trip.</p>
        </div>
      ) : (
        <div>
          <p>Sign in or register to access personalized features and recommendations.</p>
        </div>
      )}
      {/* Add more content or functionality as needed */}
    </div>
  );
}

export default Home;
