import React from "react";
import { useNavigate } from "react-router-dom";
import "../../cservices/Services.css";
import { servicesData } from "../../cservices/servicesData";
import "./cards.css";

const Cards = () => {
  const navigate = useNavigate();

  const selectedServices = servicesData.filter((s) => 
    ["integration-services", "web-development", "mobile-app-development"].includes(s.id)
  );

  return (
    <div className="main-container" style={{ flexDirection: "column", alignItems: "center" }}>
      <h1 style={{ color: "black", margin: "40px 0 10px 0", fontSize: "2.5rem", fontWeight: "700" }}>Services</h1>
      
      <div className="custom-services-grid" style={{ marginTop: "30px", opacity: 1, flexWrap: "wrap" }}>
        {selectedServices.map((service, index) => (
          <div 
            key={service.id} 
            className="services-flip-card deal-animation"
            style={{ '--card-index': index, opacity: 1 }}
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
        
        {/* View More Button */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "400px", marginLeft: "10px" }}>
          <button 
            className="explore-btn"
            style={{ 
              padding: "12px 28px",
              fontSize: "1.1rem"
            }}
            onClick={() => navigate("/services")}
          >
            View More &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
