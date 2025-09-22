import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";

const Showcasex = () => {
  return (
    <section id="showcase" className="showcase">
      <h1 className="intro-text">Work Showcase!</h1>

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
              src="https://i.postimg.cc/xTqVSv8s/image.png"
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
        {/* ToDo List */}
        <div className="project-item">
          <a
            href="https://mo7arb-art.github.io/Todo-List/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://i.postimg.cc/LsxVR1nT/image.png"
              alt="Simon Game Website"
            />
          </a>
          <div className="project-info">
            <p>
              Todo List App, A minimalist task tracker built with React,
              designed for speed, clarity, and seamless user experience. It
              features a clean component structure, responsive layout, and
              persistent state via localStorage. Every interaction—from adding
              tasks to marking them complete—feels intuitive and snappy.
              Deployed on GitHub Pages, this project reflects a strong focus on
              frontend polish, lightweight performance, and real-world
              usability.
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
      </div>
    </section>
  );
};

export default Showcasex;
