import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/plan" element={<Plan />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/book" element={<Book />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/learn-more" element={<LearnMore />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
