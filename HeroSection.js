import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
function HeroSection() {
  // const Button;
  return (
    <div className="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted></video>
      <h1>Adventure awaits</h1>
      <p>what are you waiting for</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          Watch trailer <i className="far-fa-circle"></i>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
