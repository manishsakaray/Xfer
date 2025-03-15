import React, { useState, useEffect } from "react";
import "./Hero.css";
import useTypewriter from "react-typewriter-hook";

const HeroCard = () => {
  const words = ["Safe, Secure and Reliable!", "Send Files in Seconds."];
  const [index, setIndex] = useState(0);
  const typewriterText = useTypewriter(words[index]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 7000);
    return () => clearTimeout(timer);
  }, [index]);
  return (
    <div className="hero-card">
      <div className="hero-features">
        <h1>{typewriterText}</h1>
      </div>
      <div className="hero-text">
        <h1>No Limits, No Hassle!</h1>
        <a href="#">
          <button hidden>
            <i class="uil uil-rocket"></i>
          </button>
        </a>
      </div>
    </div>
  );
};

export default HeroCard;
