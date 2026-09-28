import "./Services.css";
import React, { useEffect, useState } from "react";
import Navbar from "../attributes/Navbar";
import { useNavigate } from "react-router-dom";
import { servicesData, domainsData } from "./servicesData";

function Services() {
  const navigate = useNavigate();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar />
      <div className="services-page-container">
        <h1 className="services-main-heading">Our Services</h1>
        <p className="services-main-description">
          At Collab Vision Infosolution, we provide end-to-end technology and digital solutions that help businesses build, automate, integrate, and grow their digital operations.
        </p>
        
        <div className="custom-services-grid">
          {servicesData.map((service, index) => (
            <div 
              key={service.id} 
              className={`services-flip-card ${animate ? 'deal-animation' : ''}`}
              style={{ '--card-index': index }}
            >
              <div className="services-flip-card-inner">
                <div className="services-flip-card-front">
                  <div 
                    className="services-flip-card-image" 
                    style={{ backgroundImage: `url(${service.image})` }}
                  ></div>
                  <div className="services-flip-card-title-container">
                    <h2>{service.title}</h2>
                  </div>
                </div>
                <div className="services-flip-card-back">
                  <h2>{service.title}</h2>
                  <p>{service.subtitle}</p>
                  <button 
                    className="view-details-btn" 
                    onClick={() => navigate(`/services/detail/${service.id}`)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="domains-section">
          <h2>Domains We Worked</h2>
          <p className="domains-subtitle">Our solutions support businesses across diverse industries, including:</p>
          
          {/* Continuous scrolling marquee container */}
          <div className="domains-marquee-container">
            <div className="domains-marquee-content">
              {domainsData.map((domain, idx) => (
                <div key={idx} className="domain-box">
                  {domain}
                </div>
              ))}
              {/* Duplicate for seamless scrolling */}
              {domainsData.map((domain, idx) => (
                <div key={`dup-${idx}`} className="domain-box">
                  {domain}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
