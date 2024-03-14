import React from 'react';
import { Link } from 'react-router-dom';
import './landingPage.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <header>
        <h1>Welcome to My Portfolio Project</h1>
        <p>This is a landing page for my Portfolio Project. Explore my project, learn about me as a developer, and find links to my deployed app and GitHub repository.</p>
      </header>

      <main>
        <section className="project-info">
          <h2>About My Project</h2>
          <p>This project showcases my skills as a developer and demonstrates what I've learned throughout my coding journey. It includes features such as [list some features of your project].</p>
          <Link to="/signin">Sign In</Link> {/* Link to the sign-in page */}
          <Link to="/home">Explore the App</Link> {/* Link to the home page */}
        </section>
        
        <section className="developer-info">
          <h2>About Me</h2>
          <p>I'm [Your Name], a passionate developer with a love for coding and creating innovative solutions. I specialize in [mention your area of expertise or interest].</p>
          <a href="link-to-your-github" target="_blank">View My GitHub</a>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 [Your Name]. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LandingPage;