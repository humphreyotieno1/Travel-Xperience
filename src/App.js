import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Explore from './Explore';
import Plan from './Plan';
import Experience from './Experience';
import Book from './Book';
import Contact from './Contact';
import Login from './Login';
import Register from './Register';
import GetStarted from './GetStarted';
import LearnMore from './LearnMore';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/explore">Explore</Link>
            </li>
            <li>
              <Link to="/plan">Plan</Link>
            </li>
            <li>
              <Link to="/experience">Experience</Link>
            </li>
            <li>
              <Link to="/book">Book</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/get-started">Get Started</Link>
            </li>
            <li>
              <Link to="/learn-more">Learn More</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Home} />
        <Route path="/explore" component={Explore} />
        <Route path="/plan" component={Plan} />
        <Route path="/experience" component={Experience} />
        <Route path="/book" component={Book} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/get-started" component={GetStarted} />
        <Route path="/learn-more" component={LearnMore} />
      </div>
    </Router>
  );
}

export default App;