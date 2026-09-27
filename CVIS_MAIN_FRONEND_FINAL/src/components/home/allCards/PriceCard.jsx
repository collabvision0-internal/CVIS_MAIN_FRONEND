import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faDesktopAlt, faNetworkWired, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const keyframes = `
  @keyframes gradientAnimation {
    0% { background-position: 0% 0%; }
    50% { background-position: 100% 100%; }
    100% { background-position: 0% 0%; }
  }
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }
  @keyframes floatAnimation {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  }
  @keyframes shineEffect {
    0% { left: -100%; }
    100% { left: 100%; }
  }
  @keyframes marquee {
    0% { transform: translateX(0%); }
    100% { transform: translateX(-100%); }
  }
  
  .marquee-container {
    overflow: hidden;
    white-space: nowrap;
    width: 100%;
    max-width: 900px;
    margin: 20px auto;
    background: #f1f8ff;
    padding: 10px 0;
    border-radius: 10px;
    box-shadow: inset 0 2px 10px rgba(0,0,0,0.05);
  }
  .marquee-text {
    display: inline-block;
    padding-left: 100%;
    animation: marquee 18s linear infinite;
    font-size: 16px;
    color: #333;
    font-weight: 600;
  }
  .marquee-text:hover {
    animation-play-state: paused;
  }
  
  .tnc-link {
    color: #0075aa;
    text-decoration: none;
    font-weight: bold;
    display: inline-flex;
    align-items: center;
    gap: 5px;
    transition: color 0.3s;
  }
  .tnc-link:hover {
    color: #005a88;
    text-decoration: underline;
  }
`;

const PriceCard = () => {
  const navigate = useNavigate();

  const [selectedCountry, setSelectedCountry] = React.useState(""); 
  
  const [feeds] = React.useState([
    {
      _id: "1",
      title: "Website Development",
      price: { usa: "$75", india: "₹7,000", singapore: "S$95" },
      descriptionPoints: [
        "Web development",
        "Responsive design",
        "SEO optimization",
        "T & C apply",
      ],
      icon: faNetworkWired,
      colorGradient: "linear-gradient(-45deg, #09203f, #537895)", 
    },
    {
      _id: "2",
      title: "Desktop Application Development",
      price: { usa: "$125", india: "₹12,000", singapore: "S$160" },
      descriptionPoints: [
        "Cross-platform apps",
        "Custom software solutions",
        "Enhanced performance",
        "T & C apply",
      ],
      icon: faDesktopAlt,
      colorGradient: "linear-gradient(-45deg, #89f7fe, #66a6ff)", 
    },
    {
      _id: "3",
      title: "Mobile Application Development",
      price: { usa: "$160", india: "₹15,000", singapore: "S$200" },
      descriptionPoints: [
        "Mobile app development",
        "Cross-platform support",
        "Custom features and UI",
        "T & C apply",
      ],
      icon: faCode,
      colorGradient: "linear-gradient(-45deg, #13547a, #80d0c7)", 
    },
  ]);

  React.useEffect(() => {
    const styleTag = document.createElement("style");
    styleTag.innerHTML = keyframes;
    document.head.appendChild(styleTag);
    return () => {
      document.head.removeChild(styleTag);
    };
  }, []);

  return (
    <div style={{ padding: "40px 10px", backgroundColor: "#f9f9f9" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px", color: "#333", fontSize: "3rem", fontWeight: "900" }}>
        Development Pricing
      </h1>
      
      {/* Country selection dropdown */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <label htmlFor="country-select" style={{ fontSize: "18px", fontWeight: "bold" }}>
          Select your country:
        </label>
        <select
          id="country-select"
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
          style={{
            marginLeft: "15px",
            padding: "10px 20px",
            borderRadius: "8px",
            fontSize: "16px",
            border: "2px solid #0075aa",
            outline: "none",
            cursor: "pointer",
            fontWeight: "600",
            color: "#333"
          }}
        >
          <option value=""> Select Country </option>
          <option value="india">India (INR)</option>
          <option value="singapore">Singapore (SGD)</option>
          <option value="usa">USA (USD)</option>
        </select>
      </div>

      {/* Show price cards only if a country is selected */}
      {selectedCountry ? (
       <> 
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
          {feeds.map((item, index) => (
            <div
              key={item._id}
              style={{
                background: item.colorGradient,
                backgroundSize: "200% 200%",
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)",
                borderRadius: "20px",
                width: index === 0 ? "320px" : "300px",
                padding: "30px 20px",
                textAlign: "center",
                animation: `gradientAnimation 5s ease infinite ${index === 0 ? ", pulse 3s infinite" : ""}`,
                color: "white",
                position: "relative",
                transition: "transform 0.3s ease",
                cursor: "pointer"
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-10px)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
            >
              {index === 0 && (
                <div
                  style={{
                    position: "absolute",
                    top: "-15px",
                    right: "-15px",
                    backgroundColor: "#ff4757",
                    color: "white",
                    padding: "8px 15px",
                    borderRadius: "45px",
                    fontSize: "20px",
                    fontWeight: "800",
                    boxShadow: "0 4px 10px rgba(255, 71, 87, 0.4)",
                    overflow: "hidden",
                    border: "2px solid white",
                    zIndex: 2
                  }}
                >
                  Popular
                  <span
                    style={{
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: "-100%",
                      width: "200%",
                      height: "100%",
                      background: "linear-gradient(120deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 100%)",
                      transform: "skewX(-30deg)",
                      animation: "shineEffect 3s infinite",
                    }}
                  />
                </div>
              )}
              <FontAwesomeIcon
                icon={item.icon}
                size="3x"
                style={{ marginBottom: "20px", animation: "floatAnimation 3s ease-in-out infinite" }}
                color="white"
              />
              <div style={{ fontWeight: "800", fontSize: index === 0 ? "1.6rem" : "1.4rem", marginBottom: "15px", color: "white" }}>
                {item.title}
              </div>
              <div style={{ fontSize: "1rem", opacity: 0.9 }}>Starts From</div>
              <div style={{ fontSize: index === 0 ? "3rem" : "2.8rem", fontWeight: "900", color: "white", marginBottom: "20px" }}>
                {item.price[selectedCountry]}
              </div>
              <div style={{ textAlign: "left", marginBottom: "20px" }}>
                {item.descriptionPoints.map((point, idx) => (
                  <p key={idx} style={{ marginBottom: "8px", marginLeft: "10px", fontSize: "16px", fontWeight: "500" }}>
                    • {point}
                  </p>
                ))}
              </div>
              <button
                style={{
                  backgroundColor: "white",
                  color: "#333",
                  border: "none",
                  padding: "12px 25px",
                  borderRadius: "30px",
                  cursor: "pointer",
                  fontSize: "16px",
                  fontWeight: "bold",
                  marginTop: "10px",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                  transition: "background-color 0.3s, transform 0.3s"
                }}
                onClick={() => navigate("/contact")}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#f0f0f0";
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "white";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                Contact us
              </button>
            </div>
          ))}
        </div>
       </>
      ) : (
        <p style={{ textAlign: "center", color: "#0075aa", fontSize: "20px", fontWeight: "600", minHeight: "150px", marginTop: "40px" }}>
          Please select a country to view prices.
        </p>
      )}

      {/* Scrolling Ticker Note */}
      <div className="marquee-container">
        <div className="marquee-text">
          <strong>Note:</strong> Prices are starting prices for standard development requirements. Final pricing will be determined based on project scope, functionality, integrations, technology requirements, and customization.
        </div>
      </div>

      {/* T&C Section */}
      <div style={{ textAlign: "center", marginTop: "20px", fontSize: "18px", display: "flex", justifyContent: "center", alignItems: "center", gap: "10px" }}>
        <span>Terms and Conditions Applied.</span>
        {/* <a href="/terms-and-conditions.pdf" target="_blank" rel="noopener noreferrer" className="tnc-link" title="View Rules & Regulations">
          <FontAwesomeIcon icon={faExternalLinkAlt} size="sm" />
        </a> */}
      </div>
    </div>
  );
};

export default PriceCard;
