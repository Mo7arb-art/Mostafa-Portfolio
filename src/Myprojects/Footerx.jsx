import React from "react";
import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";

const Footerx = () => {
  return (
    <footer className="footer bg-dark text-white py-4">
      <div className="container text-center">
        <p className="mb-2">
          Mostafa Mohamed Hamdi Ali © {new Date().getFullYear()}
        </p>
        <div className="d-flex justify-content-center gap-4">
          <a
            href="https://github.com/Mo7arb-art"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/mostafa-mohamed-175a69216"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://discord.com/users/hysteria7371"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <FaDiscord />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footerx;
