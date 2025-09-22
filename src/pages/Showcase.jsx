import React from "react";
import "../Styles/Showcasestyles.css";
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const Showcase = () => {
  return (
    <section id="showcase" className="showcase">
      <h1 className="intro-text">My Latest Work!</h1>

      <div className="project-gallery">
        {/* MarketMate */}
        <div className="project-item">
          <a
            href="https://mo7arb-art.github.io/MarketMate/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://i.postimg.cc/J43FfKKR/Screenshot-2025-09-22-165114.png"
              alt="MarketMate"
            />
          </a>
          <div className="project-info">
            <p>
              MarketMate 🛒
              <br /> A modern web app built with React, HTML, CSS, and
              JavaScript. It provides a smooth and responsive user experience,
              showcasing frontend development skills such as component-based
              design, state management, and clean UI styling. Deployed on GitHub
              Pages for easy access.
            </p>

            <div className="tech-icons">
              <FaHtml5 title="HTML5" />
              <FaCss3Alt title="CSS3" />
              <FaJsSquare title="JavaScript" />
            </div>
          </div>
        </div>

        {/* Login interactive */}
        <div className="project-item">
          <a
            href="https://mo7arb-art.github.io/Stars-Login/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://i.postimg.cc/g2RC2mYb/Screenshot-2025-09-22-164324.png"
              alt="Login Website"
            />
          </a>
          <div className="project-info">
            <p>
              A Stylish login and registration interface built with HTML, CSS,
              and JavaScript. User credentials are saved in localStorage,
              allowing sign-up and login without a backend, with clean
              flexbox-based styling.
            </p>

            <div className="tech-icons">
              <FaHtml5 title="HTML5" />
              <FaCss3Alt title="CSS3" />
              <FaJsSquare title="JavaScript" />
            </div>
          </div>
        </div>

        {/* Keeper App */}
        <div className="project-item">
          <a
            href="https://mo7arb-art.github.io/keeper-project/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://i.postimg.cc/qvmg8XHQ/Screenshot-2025-08-21-181017.png"
              alt="Keeper Website"
            />
          </a>
          <div className="project-info">
            <p>
              Keeper is a sleek, React-powered note-taking app that lets users
              create, delete, and organize notes in real time. Built with
              reusable components and clean state management, it’s a great
              showcase of dynamic rendering and modular design.
            </p>

            <div className="tech-icons">
              <FaReact title="React" />
            </div>
          </div>
        </div>
        <Link to="/myprojects" className="button-launchpad">
          Explore My Launches!
        </Link>
      </div>
    </section>
  );
};

export default Showcase;
