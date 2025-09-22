import React from "react";
import { Routes, Route } from "react-router-dom";

// Portfolio sections
import HeroSection from "./pages/Home.jsx";
import MyNavbar from "./pages/Navbar.jsx";
import AboutMe from "./pages/Aboutme.jsx";
import Showcase from "./pages/Showcase.jsx";
import Contact from "./pages/Contactme.jsx";
import Footer from "./pages/Footer.jsx";

// Projects section
import ProjectsApp from "./Myprojects/ProjectsApp.jsx";

export default function App() {
  return (
    <Routes>
      {/* Main portfolio page (all sections) */}
      <Route
        path="/"
        element={
          <>
            <MyNavbar />
            <HeroSection />
            <AboutMe />
            <Showcase />
            <Contact />
            <Footer />
          </>
        }
      />

      {/* Projects page */}
      <Route path="/myprojects" element={<ProjectsApp />} />
    </Routes>
  );
}
