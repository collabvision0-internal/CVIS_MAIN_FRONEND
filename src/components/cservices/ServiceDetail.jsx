import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../attributes/Navbar";
import { servicesData } from "./servicesData";
import "./ServiceDetail.css";

function ServiceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState(null);

  useEffect(() => {
    const foundService = servicesData.find((s) => s.id === id);
    if (foundService) {
      setService(foundService);
    } else {
      navigate("/services");
    }
  }, [id, navigate]);

  if (!service) return null;

  return (
    <>
      <Navbar />
      <div className="service-detail-container">
        <div className="service-detail-header" style={{ backgroundImage: `url(${service.image})` }}>
          <div className="service-detail-header-overlay">
            <h1>{service.title}</h1>
            <h2>{service.subtitle}</h2>
          </div>
        </div>
        
        <div className="service-detail-content">
          <div className="service-detail-description-card">
            <h3>Overview</h3>
            <p>{service.description}</p>
          </div>

          <div className="service-detail-includes-section">
            <h3>Our {service.title} Include:</h3>
            <ul className="service-detail-includes-list">
              {service.includes.map((item, index) => (
                <li key={index}>
                  <span className="check-icon">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="service-detail-footer">
          <button className="back-to-services-btn" onClick={() => navigate("/services")}>
            &larr; Back to Services
          </button>
        </div>
      </div>
    </>
  );
}

export default ServiceDetail;
