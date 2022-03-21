import React from "react";
import ReactDOM from "react-dom";
import img1 from "../images/logo.png"

export default function Navbar() {
  
  return (
    <nav>
      <div>
        <img src={img1} width="60px"/>
        <h1>ReactFacts</h1>
      </div>
      <h3>React Course - Project 1</h3>
    </nav>
  );
}
