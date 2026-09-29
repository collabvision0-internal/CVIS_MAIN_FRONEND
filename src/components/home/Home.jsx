
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Home.css";

import Navbar from "../attributes/Navbar";
import Cards from "./allCards/Cards";
import PriceCard from "./allCards/PriceCard";
import Testimonials from "./allCards/Testimonials";
import TrainAnimation from "./TrainAnimation";

import HeroImg1 from "./hero_images/Hero.png";
import HeroImg2 from "./hero_images/hero_2.jpg";
import HeroImg3 from "./hero_images/hero_3.jpg";
import HeroImg4 from "./hero_images/integration-services.jpg";
import HeroImg5 from "./hero_images/mobile-app-development.jpg";
import HeroImg6 from "./hero_images/seo.jpg";

const HERO_IMAGES = [
  HeroImg1,
  HeroImg2,
  HeroImg3,
  HeroImg4,
  HeroImg5,
  HeroImg6,
];

const HERO_TITLE =
  "Elevate Your Business with Advanced Software Technologies";

const HERO_DESCRIPTION =
  "Scale efficiently, streamline workflows, and future-proof your business. Our custom automation and state-of-the-art software technologies eliminate bottlenecks and drive measurable efficiency so your team can focus on growth.";

// Typewriter Effect
function TypewriterEffect({ text }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    let pause = 0;

    const interval = setInterval(() => {
      if (pause > 0) {
        pause -= 1;
        return;
      }

      if (index <= text.length) {
        setDisplayedText(text.substring(0, index));
        index += 1;
      } else {
        pause = 30;
        index = 0;
        setDisplayedText("");
      }
    }, 50);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <span className="typewriter-text">
      {displayedText}
      <span className="typewriter-cursor" aria-hidden="true">
        |
      </span>
    </span>
  );
}

// Hero Image Slider
function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((previousIndex) =>
        (previousIndex + 1) % HERO_IMAGES.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="hero-slider"
      aria-label="Software solutions image slideshow"
    >
      {HERO_IMAGES.map((image, index) => (
        <img
          key={image}
          src={image}
          alt={`Software solutions showcase ${index + 1}`}
          className={`hero-slider-image ${
            index === currentIndex ? "active" : ""
          }`}
          loading={index === 0 ? "eager" : "lazy"}
          aria-hidden={index !== currentIndex}
        />
      ))}

      <div className="hero-slider-indicators">
        {HERO_IMAGES.map((_, index) => (
          <span
            key={index}
            className={`hero-slider-dot ${
              index === currentIndex ? "active" : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
}

// Home Page
function Home() {
  const navigate = useNavigate();

  const handleContact = () => {
    navigate("/contact");
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <main className="home-hero">
        <div className="home-hero-container">
          {/* Hero Image */}
          <div className="home-hero-visual">
            <HeroSlider />
          </div>

          {/* Hero Content */}
          <div className="home-hero-content">
            <div className="home-hero-glow" aria-hidden="true" />

            <div className="home-hero-text">
              <h1 className="home-hero-title">
                <TypewriterEffect text={HERO_TITLE} />
              </h1>

              <p className="home-hero-description">
                {HERO_DESCRIPTION}
              </p>

              <button
                type="button"
                className="home-hero-button"
                onClick={handleContact}
              >
                Contact Us
                <span className="home-hero-button-arrow" aria-hidden="true">
                  →
                </span>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Main Content */}
      <section className="home-content">
        {/* Pricing Section */}
        <div className="home-pricing-section">
          <PriceCard />
        </div>

        {/* Cards Section */}
        <div className="home-cards-section">
          <Cards />
        </div>

        {/* Animation Section */}
        <div className="home-train-section">
          <TrainAnimation />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="home-testimonials-section">
        <Testimonials />
      </section>
    </>
  );
}

export default Home;