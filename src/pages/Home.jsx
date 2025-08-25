import React from "react";
import "../Styles/Homestyles.css";

const HeroSection = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70; // adjust if your navbar is fixed
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section className="hero">
      <div className="hero-image">
        <img
          src="https://i.postimg.cc/kMkg6Q0x/20250817-113656nobg.png"
          alt="Mostafa Mohamed"
        />
      </div>

      <div className="hero-icon">
        <img
          src="https://i.postimg.cc/TY4HjNf7/JS-icon.png"
          alt="Java Script"
        />
        <img
          src="https://i.postimg.cc/KYm2Ccsp/react-original-logo-icon-146374.png"
          alt="React.JS"
        />
        <img
          src="https://i.postimg.cc/sXWZ8XhG/github-logo-icon-229278.png"
          alt="Github"
        />
      </div>

      <div className="hero-text">
        <h1>Hi, I’m Mostafa</h1>

        <p>
          Let’s transform your vision into a digital experience that speaks for
          itself.
        </p>

        <button
          type="button"
          className="btn btn-outline-light"
          onClick={() => scrollToSection("contact")}
        >
          Contact Me!
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
