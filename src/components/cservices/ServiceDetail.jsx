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
        <div
          className="service-detail-header"
          style={{ backgroundImage: `url(${service.image})` }}
        >
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

          <div className="service-includes">
            <div className="service-includes-header">
              <div className="service-includes-icon">
                <span>✓</span>
              </div>
              <div className="service-includes-heading">
                <h3>What Our Service Includes</h3>
                <p>Explore the features and benefits of our {service.title}.</p>
              </div>
            </div>

            <div className="service-includes-grid">
              {service.includes?.map((item, index) => (
                <div className="service-includes-item" key={index}>
                  <span className="service-includes-check">✓</span>
                  <span className="service-includes-text">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="service-detail-footer">
          <button
            className="back-to-services-btn"
            onClick={() => navigate("/services")}
          >
            &larr; Back to Services
          </button>
        </div>
      </div>
    </>
  );
}

export default ServiceDetail;
