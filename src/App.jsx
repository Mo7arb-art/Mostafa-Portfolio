import React from "react";
import HeroSection from "./pages/Home.jsx";
import MyNavbar from "./pages/Navbar";
import AboutMe from "./pages/Aboutme.jsx";
import Showcase from "./pages/Showcase.jsx";
import Contact from "./pages/Contactme.jsx";
import Footer from "./pages/Footer.jsx";

export default function App() {
  return (
    <div className="App">
      <MyNavbar />
      <HeroSection />
      <AboutMe />
      <Showcase />
      <Contact />
      <Footer />
    </div>
  );
}
