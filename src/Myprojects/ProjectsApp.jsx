import React from "react";
import MyNavbarx from "./Navbarx";
import Footerx from "./Footerx.jsx";
import Showcasex from "./Showcasex.jsx";
import "../Styles/Myprojects.css";

export default function App() {
  return (
    <div className="App">
      <div style={{ backgroundColor: "#044343" }}>
        <MyNavbarx />
      </div>
      <Showcasex />
      <Footerx />
    </div>
  );
}
