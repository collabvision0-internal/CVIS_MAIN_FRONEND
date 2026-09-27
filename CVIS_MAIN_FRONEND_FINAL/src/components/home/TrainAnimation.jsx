import React, { useEffect, useState, useRef } from "react";
import "./TrainAnimation.css";

const TrainAnimation = () => {
  const [phase, setPhase] = useState("hidden"); // hidden, train, marquee
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && phase === "hidden") {
        setPhase("train");
        
        // After 4.5 seconds (train entry + pause), switch to continuous marquee
        setTimeout(() => {
          setPhase("marquee");
        }, 4500);
      }
    });
    
    if (domRef.current) observer.observe(domRef.current);
    
    return () => observer.disconnect();
  }, [phase]);

  return (
    <div ref={domRef} className="train-animation-container">
      
      {/* PHASE 1: The Train Entry */}
      {phase === "train" && (
        <div className="train-content">
          <h2 className="train-line-1 train-enter-1">YOUR VISION</h2>
          <h2 className="train-line-2 train-enter-2">OUR SOLUTION</h2>
        </div>
      )}

      {/* PHASE 2: Continuous Marquee Scrolling */}
      {phase === "marquee" && (
        <div className="marquee-content-wrapper">
          <div className="marquee-scroll-track">
            {/* Repeat 4 times for seamless infinite scroll */}
            {[...Array(4)].map((_, i) => (
              <div key={i} className="train-content marquee-item">
                <h2 className="train-line-1">YOUR VISION</h2>
                <h2 className="train-line-2">OUR SOLUTION</h2>
              </div>
            ))}
          </div>
        </div>
      )}
      
    </div>
  );
};

export default TrainAnimation;
