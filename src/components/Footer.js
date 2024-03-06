import React from 'react';
import { Link } from 'react-router-dom';

const KeepInTouch = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // logic here to handle form submission
    console.log('Email submitted:', e.target.email.value);
  }

  return (
    <div className="keep-in-touch">
      <h3>Keep in Touch</h3>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Enter your email" required />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <ul className="footer-links">
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/privacy-policy">Privacy Policy</Link></li>
      </ul>
      <KeepInTouch />
    </footer>
  );
}

export default Footer;
