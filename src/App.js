import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Explore from './components/Explore';
import Plan from './components/Plan';
import Experience from './components/Experience';
import Book from './components/Book';
import Contact from './components/Contact';
import Login from './components/Login';
import Register from './components/Register';
import GetStarted from './components/GetStarted';
import LearnMore from './components/LearnMore';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <div className="header-navbar">
          <h1 className="header"><Link to="/">TRAVELXPERIENCE</Link></h1>
          <nav className="navbar">
            <ul className="nav-links">
              <li><Link to="/explore">Explore</Link></li>
              <li><Link to="/plan">Plan</Link></li>
              <li><Link to="/experience">Experience</Link></li>
              <li><Link to="/book">Book</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
          <div className="auth-buttons">
            <Link to="/login" className="auth-button">Login</Link>
            <Link to="/register" className="auth-button">Register</Link>
          </div>
        </div>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/plan" element={<Plan />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/book" element={<Book />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>

        <div className="additional-content">
          <Link to="/get-started" className="link-with-margin">Get Started</Link>
          <Link to="/learn-more">Learn More</Link>
        </div>
      </div>
    </Router>
  );
}

export default App;
