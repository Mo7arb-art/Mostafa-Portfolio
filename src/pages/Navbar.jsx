import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Navbarstyles.css";
import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";

function MyNavbar() {
  // 🔗 Define your URLs here
  const githubURL = "https://github.com/Mo7arb-art";
  const linkedinURL = "https://www.linkedin.com/in/mostafa-mohamed-175a69216";
  const discordURL = "https://discord.com/users/hysteria7371";

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Left-aligned buttons */}
        <div className="navbar-left d-flex">
          <button
            className="btn btn-outline-light me-2"
            onClick={() => scrollToSection("home")}
          >
            Home
          </button>
          <button
            className="btn btn-outline-light me-2"
            onClick={() => scrollToSection("about")}
          >
            About Me
          </button>
          <button
            className="btn btn-outline-light me-2"
            onClick={() => scrollToSection("showcase")}
          >
            Showcase
          </button>
          <button
            className="btn btn-outline-light"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </button>
        </div>

        {/* Right-aligned icons */}
        <div className="navbar-right d-flex gap-3">
          <a href={githubURL} target="_blank" rel="noopener noreferrer">
            <FaGithub className="nav-icon" />
          </a>
          <a href={linkedinURL} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="nav-icon" />
          </a>
          <a
            href={discordURL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              // Optional: warn user if Discord is blocked
              const isBlocked =
                window.location.hostname.includes("codesandbox");
              if (isBlocked) {
                e.preventDefault();
                alert(
                  "Discord may be blocked on this network. Try opening it from your browser directly."
                );
              }
            }}
          >
            <FaDiscord
              className="nav-icon"
              title="Discord (might be blocked)"
            />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default MyNavbar;
