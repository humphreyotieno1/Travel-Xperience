import React from 'react';
import { Link } from 'react-router-dom';

const Search = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // form submission
    const formData = new FormData(e.target);
    const searchQuery = formData.get('searchQuery');
    console.log('Search query:', searchQuery);
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input type="text" name="searchQuery" placeholder="Search destinations" />
      <button type="submit">Search</button>
    </form>
  );
}

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="header"><Link to="/">TRAVELXPERIENCE</Link></h1>
      <ul className="nav-links">
        <li><Link to="/explore">Explore</Link></li>
        <li><Link to="/plan">Plan</Link></li>
        <li><Link to="/experience">Experience</Link></li>
        <li><Link to="/book">Book</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="auth-buttons">
        <Link to="/login" className="auth-button">Login</Link>
        <Link to="/register" className="auth-button">Register</Link>
      </div>
    </nav>
  );
}

export default Navbar;
