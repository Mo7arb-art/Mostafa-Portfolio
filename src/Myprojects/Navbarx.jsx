import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";
import { Link } from "react-router-dom";

function MyNavbarx() {
  const githubURL = "https://github.com/Mo7arb-art";
  const linkedinURL = "https://www.linkedin.com/in/mostafa-mohamed-175a69216";
  const discordURL = "https://discord.com/users/hysteria7371";

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Left-aligned button */}
        <div className="navbar-left d-flex">
          <Link className="btn btn-outline-light me-2" to="/">
            Home
          </Link>
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

export default MyNavbarx;
