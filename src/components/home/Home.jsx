// import "./Home.css";
// import Cards from "./allCards/Cards";
// import FeedForm from "../home/bookDemo/FeedForm";
// import BookDemo from "./bookDemo/BookDemo";
// import Main_slider from "./slider/main_slider";
// import Ourfeedback from "./ourfeed/ourfeedback";
// import CardBrochure from "./allCards/CardBrochure";
// import Navbar from "../attributes/Navbar";
// // import { Steps } from "antd";
// import Steps from "./Steps";

// function Home() {
//   return (
//     <>
//       <Navbar></Navbar>
//       <Main_slider />
//       <div className="cardsFlow" style={{ width: "100%" }}>
//         {" "}
//         <Cards />
//         <div className="mission">
//           <h1>YOUR VISION OUR SOLUTION</h1>
//         </div>
//         <Steps></Steps>
//         <CardBrochure />
//       </div>
//       <FeedForm />
//       {/* <BookDemo /> */}
//       {/* <Ourfeedback /> */}
//     </>
//   );
// }

// export default Home;
import "./Home.css";
import Cards from "./allCards/Cards";
import FeedForm from "../home/bookDemo/FeedForm";
import BookDemo from "./bookDemo/BookDemo";
import Main_slider from "./slider/main_slider";
import Ourfeedback from "./ourfeed/ourfeedback";
// import CardBrochure from "./allCards/CardBrochure";
import Navbar from "../attributes/Navbar";
import Steps from "./Steps";
import Testimonials from "./allCards/Testimonials";
import HeroImg1 from "./hero_images/Hero.png";
import HeroImg2 from "./hero_images/hero_2.jpg";
import HeroImg3 from "./hero_images/hero_3.jpg";
import HeroImg4 from "./hero_images/integration-services.jpg";
import HeroImg5 from "./hero_images/mobile-app-development.jpg";
import HeroImg6 from "./hero_images/seo.jpg";
import { useNavigate } from "react-router-dom";
import Computer from "./Computer";
import PriceCard from "./allCards/PriceCard";
import React, { useEffect, useState, useRef } from "react";
import TrainAnimation from "./TrainAnimation";

const AnimatedLetters = ({ text, color = "#0a5a96" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      // Keep it visible once it triggers, or animate in/out. Let's trigger once.
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      } else {
        setIsVisible(false); // Play every time it comes into view
      }
    });
    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <h1
      ref={domRef}
      style={{
        color: color,
        margin: "5px",
        fontWeight: "900", // bold
        display: "inline-block",
      }}
    >
      {text.split("").map((char, index) => (
        <span
          key={index}
          style={{
            display: "inline-block",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0) scale(1)" : "translateY(30px) scale(0.5)",
            transition: "opacity 0.4s ease, transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
            transitionDelay: `${index * 0.08}s`,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h1>
  );
};

const TypewriterEffect = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= text.length) {
        setDisplayedText(text.substring(0, i));
      }
      i++;
      if (i > text.length + 30) { // pause at the end for about 1.5 seconds
        i = 0;
      }
    }, 50);
    return () => clearInterval(interval);
  }, [text]);
  return <span>{displayedText}</span>;
};

const HeroSlider = () => {
  const images = [
    HeroImg1,
    HeroImg2,
    HeroImg3,
    HeroImg4,
    HeroImg5,
    HeroImg6
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div style={{ width: "100%", minWidth: "300px", maxWidth: "580px", height: "350px", position: "relative", overflow: "hidden", borderRadius: "12px", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}>
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Slide ${index}`}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: index === currentIndex ? 1 : 0,
            transition: "opacity 1s ease-in-out"
          }}
        />
      ))}
    </div>
  );
};

function Home() {
  const navigate = useNavigate();
  // useEffect(() => {
  //   const styleSheet = document.styleSheets[0];
  //   const keyframes = `
  //     @keyframes bgAnimation {
  //       0% { background-position: 0% 50%; }
  //       50% { background-position: 100% 100%; }
  //       100% { background-position: 0% 50%; }
  //     }`;

  //   // Insert keyframes at the end of the stylesheet
  //   styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
  // }, []);
  useEffect(() => {
    // Create a new <style> element
    const style = document.createElement("style");
    style.type = "text/css";
    const keyframes = `
      @keyframes bgAnimation {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 100%; }
        100% { background-position: 0% 50%; }
      }`;
    
    // Append the keyframes to the <style> element
    style.appendChild(document.createTextNode(keyframes));
    
    // Append the <style> element to the document head
    document.head.appendChild(style);

    // Clean up the <style> element on unmount
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  return (
    <>
      <Navbar></Navbar>

      {/* <Main_slider /> */}
      {/* <main>
        <div className="container">
          <div>
            {" "}
            <img src={Hero} alt="Hero" />
          </div>{" "}
          <div className="hero-text">
            <h1>Elevate Your Business with Advanced Software Technologies</h1>
            <p>
              Transform your operations and achieve greater efficiency with our
              state-of-the-art software solutions. Join us in shaping the future
              of your business.
            </p>
            <button onClick={() => navigate("/contact")}>Contact Us</button>{" "}
          </div>
        </div>
      </main> */}

      <main style={{ padding: "20px 10px", minHeight: "calc(100vh - 100px)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div className="container" style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "center", gap: "35px", width: "100%", maxWidth: "1200px" }}>
          {/* Background Grid removed as requested */}
          <div style={{ display: "flex", justifyContent: "flex-end", flexShrink: 0 }}>
            <HeroSlider />
          </div>
          <div style={{ position: "relative", zIndex: 2, display: "flex", justifyContent: "flex-start", marginTop: "-10px" }}>
            {/* Spot Color Behind Text */}
            <div
              style={{
                position: "absolute",
                top: "20px",
                left: "0px",
                height: "300px",
                width: "300px",
                borderRadius: "50%",
                backgroundColor: "#00a8c5",
                opacity: 0.4,
                filter: "blur(110px)",
                zIndex: -1, // Behind the text but above the grid
                overflow: "hidden",
              }}
            ></div>

            {/* Text Content */}
            <div className="hero-text" style={{ position: "relative", maxWidth: "550px", padding: "0 10px" }}>
              <h1 style={{ fontSize: "2.7rem", lineHeight: "1.1", marginBottom: "15px", color: "#111", fontWeight: "800", textAlign: "left", minHeight: "90px" }}>
                <TypewriterEffect text="Elevate Your Business with Advanced Software Technologies" />
              </h1>
              <p style={{ fontSize: "1.1rem", lineHeight: "1.5", marginBottom: "25px", color: "#444", textAlign: "left" }}>
                Scale efficiently, streamline workflows, and future-proof your business. Our custom automation and state-of-the-art software technologies eliminate bottlenecks and drive measurable efficiency so your team can focus on growth.
              </p>
              <button 
                onClick={() => navigate("/contact")}
                style={{
                  padding: "12px 30px", 
                  fontSize: "1.05rem", 
                  backgroundColor: "#0075aa", 
                  color: "white", 
                  border: "2px solid transparent", 
                  borderRadius: "8px", 
                  cursor: "pointer", 
                  fontWeight: "bold", 
                  boxShadow: "0 4px 10px rgba(0,117,170,0.3)",
                  transition: "all 0.3s ease"
                }}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </main>

      <div className="cardsFlow " style={{ width: "100%", overflowX: "hidden" }}>
        <div style={{ height: "auto" }}>
          {" "}
          <PriceCard></PriceCard>
        </div>{" "}
        <Cards />
        <TrainAnimation />
        {/* <Steps></Steps> */}
      </div>

      {/* 
      <div
        style={{
          height: "100vh",
          width: "100%",
          backgroundSize: "400% 400%",
          background:
            "linear-gradient(-45deg, #0494cc, #0781b6, #043c74, #0a5a96, #036098, #021b56)",
          animation: "bgAnimation 5s ease infinite",
          display: "flex",
          alignItems: "center", // Vertically centers the content
          justifyContent: "center", // Horizontally centers the content
          // Prevents any overflow issues
          // Set custom cursor
          marginTop: "50px",
        }}
      >
        {" "}
        <div
          // style={{
          //   // marginTop: "-300px",
          //   height: "100%",
          //   width: "100%",
          //   // paddingLeft: "4.9%",
          //   background: "transparent",
          // }}
          style={{
            // marginTop: "-300px",
            height: "100%",
            width: "100%",
            padding: " 0 10% 0 3.5%",
            background: "transparent",
          }}
        >
          {" "}
          <Computer />
        </div>
      </div>
      <div style={{ marginTop: "20px" }}>
        <p>
          <a
            href="https://sketchfab.com/3d-models/gaming-desktop-pc-d1d8282c9916438091f11aeb28787b66"
            target="_blank"
            rel="noopener noreferrer"
          >
            3D model credits{" "}
          </a>
          .
        </p>
      </div>
      */}
      {/* <FeedForm /> */}
      <Testimonials></Testimonials>
      {/* <BookDemo /> */}
      {/* <Ourfeedback /> */}
    </>
  );
}

export default Home;
//MongoDB
// 3Bdq1UL48QIV3D5V
// collabvisioninfosolution
// mongodb+srv://collabvisioninfosolution:3Bdq1UL48QIV3D5V@cluster0.s5lok.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
