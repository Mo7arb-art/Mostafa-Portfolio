import React from "react";
import "../Styles/Showcasestyles.css";
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";

const Showcase = () => {
  return (
    <section id="showcase" className="showcase">
      <h1 className="intro-text">My Latest Work!</h1>

      <div className="project-gallery">
        {/* Keeper App */}
        <div className="project-item">
          <a
            href="https://cgj9r5.csb.app/"
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

        {/* TinDog */}
        <div className="project-item">
          <a
            href="https://mo7arb-art.github.io/TinDog-Project/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://i.postimg.cc/2SJrkHDp/Screenshot-2025-08-21-181328.png"
              alt="TinDog Website"
            />
          </a>
          <div className="project-info">
            <p>
              TinDog is a playful landing page for a fictional dog dating app,
              crafted with pure HTML and CSS. It features responsive design,
              elegant layout structure, and smooth visual hierarchy—perfect for
              demonstrating front-end fundamentals.
            </p>

            <div className="tech-icons">
              <FaHtml5 title="HTML5" />
              <FaCss3Alt title="CSS3" />
            </div>
          </div>
        </div>

        {/* Simon Game */}
        <div className="project-item">
          <a
            href="https://mo7arb-art.github.io/Simon-Game/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://i.postimg.cc/DfghJfTP/Screenshot-2025-08-21-181457.png"
              alt="Simon Game Website"
            />
          </a>
          <div className="project-info">
            <p>
              Simon Game is a nostalgic memory challenge built using HTML, CSS,
              and JavaScript. It includes interactive button logic, sound
              effects, and a score system—all wrapped in a clean, responsive UI.
              A fun way to show off DOM manipulation and event handling.
            </p>

            <div className="tech-icons">
              <FaHtml5 title="HTML5" />
              <FaCss3Alt title="CSS3" />
              <FaJsSquare title="JavaScript" />
            </div>
          </div>
        </div>
          <a
          href="https://mo7arb-art.github.io/myprojects-portfolio/"
          target="_blank"
          rel="noopener noreferrer"
          className="button-launchpad"
        >
          Explore My Launches!
        </a>
      </div>
    </section>
  );
};

export default Showcase;
