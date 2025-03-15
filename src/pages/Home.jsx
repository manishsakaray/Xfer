import React from "react";
import "./Home.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import MatrixRain from "./MatrixRain";
import star from "../assets/pngkey_star.png"

const Home = () => {
  return (
    <>
      <div id="matrix-container">
        <MatrixRain targetId="matrix-container" />
        <Navbar />
        <main>
          <Hero></Hero>
        </main>
      </div>
      <div className="pro-membership">
        <div className="pro-membership-text">
          <p>
            Upgrade to <span>Xfer-Pro</span>
          </p>
          <p>and avail benefits like</p>
        </div>
        <div className="horizontal-line"></div>
        <div className="pro-membership-benefits">
          <p>
            <i class="uil uil-star"></i> Ad Free Services
          </p>
          <p>
            <i class="uil uil-star"></i> Increased Storage
          </p>
          <p>
            <i class="uil uil-star"></i> Unlimited Sharing
          </p>
          <img src={star} alt="star image" />
        </div>
      </div>
      <footer>
        <div className="footer-div">
          <div className="footer-nav">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
            </ul>
          </div>
          <div className="horizontal-line"></div>
          <div className="footer-socail-links">
          <ul>
              <li>
                <a href="#"><i class="uil uil-instagram-alt"></i>Instagram</a>
              </li>
              <li>
                <a href="#"><i class="uil uil-twitter">Twitter</i></a>
              </li>
              <li>
                <a href="#"><i class="uil uil-youtube"></i>Youtube</a>
              </li>
            </ul>
          </div>
          <div className="horizontal-line"></div>
          <div className="footer-contact">
            
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
