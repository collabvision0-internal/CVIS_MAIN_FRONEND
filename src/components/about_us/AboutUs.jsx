/* eslint-disable react/no-unescaped-entities */

// import "./aboutus.css";
// import CoreValues from "./CoreValues";
// import Navbar from "../attributes/Navbar";
// import "./About.css";

// function AboutUs() {
//   return (
//     <>
//       <Navbar></Navbar>
//       <div className="aboutUs-header-container">
//         <div className="image-overlay">
//           <div className="image-overlayText">
//             <div className="image-left myblock">
//               <h1 className="animate-from-left">Our Mission Is to Empower</h1>
//               <br />
//               <div className="image-left-row">
//                 <div className="item-n">
//                   <p className="num">24</p>
//                   <p className="num-image-left-text">
//                     Professional Online Modules
//                   </p>
//                 </div>

//                 <div className="item-n">
//                   <p className="num">16</p>
//                   <p className="num-image-left-text">
//                     Industry Leading Mentors
//                   </p>
//                 </div>

//                 <div className="item-n">
//                   <p className="num">99%</p>
//                   <p className="num-image-left-text">
//                     Satisfaction Rated by Students
//                   </p>
//                 </div>
//               </div>

//               <div className="image-left-row">
//                 <div>
//                   <p className="num">99%</p>
//                   <p className="num-image-left-text">
//                     Satisfaction Rated by Students
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="image-right myblock">
//               <div className="image-right-title">Our Vision</div>
//               <div className="image-right-text">
//                 <p>
//                   For excellent leadership and life long success a centre of
//                   higher learning to establish and develop and institute with
//                   expanding horizon of knowledge in the field of engineering and
//                   technology.
//                 </p>
//               </div>

//               <div className="image-right-title">Our Mission</div>

//               <div className="image-right-text">
//                 <p>
//                   To provide professional program creative academics through
//                   high-quality education in the engineering and
//                   disciplines.Establish mutual beneficial partnerships with
//                   Industry, Alumni, Local, State and Central Governments by
//                   Public Service Assistance and Collaborative Research.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="cval">
//         <CoreValues />
//       </div>
//       <div className="aboutUs-bottom-container">
//         <div className="text">
//           <h1>About Collab Vision Infosolutions</h1>

//           <p className="intro">
//             CVIS is a leading company focused on Cloud Technology (Salesforce
//             and MuleSoft), Website, Android App, Testing Project, Digital
//             Marketing Services, and Technical Support in Kolhapur. We build
//             great products and solutions for your business problems.
//           </p>

//           <div className="mission-section">
//             <h2>Our Mission</h2>
//             <p>
//               We specialize in Cloud, Software, and Mobile App Development
//               services for various industries including Ecommerce, Education,
//               Manufacturing, Healthcare, and more.
//             </p>
//           </div>

//           <div className="opportunities-section">
//             <h2>Opportunities and Certifications</h2>
//             <p>
//               Master MuleSoft technology for a world of opportunities. Become a
//               MuleSoft Certified developer through our training and receive
//               company certification. Get real-time project experience along with
//               the chance to prepare for MuleSoft certification provided by
//               Salesforce/MuleSoft.
//             </p>
//           </div>

//           <div className="tools-section">
//             <h2>From MuleSoft Developer's Eye</h2>
//             <p>Learn the essential tools needed for MuleSoft development:</p>
//             <ol>
//               <li>GitHub and GitHub Desktop - Push code to repositories</li>
//               <li>Postman - Test applications or APIs</li>
//               <li>AnyPoint Platform & Studio - Design the code</li>
//             </ol>
//           </div>
//         </div>
//         <div className="image">
//           <img
//             src="https://static.wixstatic.com/media/c837a6_73b0c47b3d1549e4b96178367ef6c597~mv2.jpg/v1/fill/w_912,h_1510,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_73b0c47b3d1549e4b96178367ef6c597~mv2.jpg"
//             alt="imgageLeft"
//           />
//         </div>
//       </div>

//       {/* <Navbar></Navbar>
//       <div className="myimg"></div>
//       <div className="back-supp">
//         {" "}
//         <div className="abt-main">
//           <div className="gap"></div>{" "}
//           <div className="first-abt">
//             {" "}
//             <h1>About Collab Vision Infosolutions</h1>
//             <p className="intro">
//               CVIS is a leading company focused on Cloud Technology (Salesforce
//               and MuleSoft), Website, Android App, Testing Project, Digital
//               Marketing Services, and Technical Support in Kolhapur. We build
//               great products and solutions for your business problems.
//             </p>
//           </div>
//           <div className="mission-section">
//             <h2>Our Mission</h2>
//             <p>
//               We specialize in Cloud, Software, and Mobile App Development
//               services for various industries including Ecommerce, Education,
//               Manufacturing, Healthcare, and more.
//             </p>
//           </div>
//           <div className="opportunities-section">
//             <h2>Opportunities and Certifications</h2>
//             <p>
//               Master MuleSoft technology for a world of opportunities. Become a
//               MuleSoft Certified developer through our training and receive
//               company certification. Get real-time project experience along with
//               the chance to prepare for MuleSoft certification provided by
//               Salesforce/MuleSoft.
//             </p>
//           </div>
//         </div>
//       </div> */}
//     </>
//   );
// }

// export default AboutUs;
import React, { useEffect } from "react";
import CoreValues from "./CoreValues";
import Navbar from "../attributes/Navbar";
import "./About.css";

function AboutUs() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const hiddenElements = document.querySelectorAll(".reveal-on-scroll");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="mainAbt">
        <div className="about-hero-glass">
          <div className="about-hero-col">
            <h1 className="about-hero-title animate-from-left">Our Mission Is to Empower</h1>
            
            <div className="about-hero-feature animate-down">
              <span style={{ fontSize: "28px" }}>🌟</span>
              <p>Industry Leading Experts</p>
            </div>
            
            <div className="about-hero-feature animate-down">
              <span style={{ fontSize: "28px" }}>🤝</span>
              <p>Satisfaction Rated by Clients</p>
            </div>
          </div>

          <div className="about-hero-col animate-right">
            <h2 className="about-section-title">Our Vision</h2>
            <p className="about-section-text">
              To lead the future of technology through innovative software
              solutions, driving transformative change and empowering
              businesses to reach new heights.
            </p>

            <h2 className="about-section-title">Our Mission</h2>
            <p className="about-section-text" style={{ marginBottom: 0 }}>
              To deliver exceptional software development services with a
              focus on quality, creativity, and client satisfaction. Forge
              strategic partnerships with industry leaders and stakeholders to
              advance technology, foster growth, and create impactful
              solutions.
            </p>
          </div>
        </div>
      </div>
      {/* main part end */}

      <div className="core-values-container">
        <div className="core-value">
          <h2>Cutting-Edge Technology & Skills 💡</h2>
          <p>
            Our solutions leverage the latest technologies and skills to meet
            industry demands.
          </p>
        </div>
        <div className="core-value">
          <h2>Expert Team 🌟</h2>
          <p>
            Our certified experts bring extensive industry experience to every
            project, ensuring top-notch solutions.
          </p>
        </div>
        <div className="core-value">
          <h2>Innovative Problem Solving 🧩</h2>
          <p>
            We tackle challenges with creative solutions and real-world
            scenarios to foster a strategic mindset.
          </p>
        </div>
        <div className="core-value">
          <h2>Comprehensive Support 🤝</h2>
          <p>
            From initial concept to deployment, we provide end-to-end support
            for all your software needs.
          </p>
        </div>
        <div className="core-value">
          <h2>Growth-Focused Solutions 🚀</h2>
          <p>
            Our tailored software solutions are designed to accelerate your
            business growth and drive success.
          </p>
        </div>
      </div>

      {/* NEW ABOUT US SECTIONS */}
      <section className="new-about-sections-container animated-bg">
        {/* 1. About Us */}
        <div className="new-about-section slide-left glass-card reveal-on-scroll">
          <h1 className="section-title">About Us</h1>
          <h3 className="section-subtitle">Empowering Businesses Through Technology</h3>
          <p className="section-text">
            Collab Vision Infosolution is a technology solutions and services company focused on helping businesses transform their ideas into scalable, reliable, and result-driven digital solutions.
          </p>
          <p className="section-text">
            We specialize in Cloud Technology, Salesforce, MuleSoft, Website Development, Mobile App Development, Software Testing, Digital Marketing, and Technical Support. Our team combines technical expertise, industry knowledge, and an agile approach to deliver solutions that address real business challenges.
          </p>
          <p className="section-text">
            We work closely with our clients to understand their requirements, develop the right technology strategy, and deliver solutions that improve efficiency, enhance customer experiences, and support long-term business growth.
          </p>
        </div>

        {/* 2. What We Do */}
        <div className="new-about-section pop-up bg-light modern-border reveal-on-scroll">
          <h1 className="section-title">What We Do</h1>
          <h3 className="section-subtitle">We provide end-to-end technology solutions across multiple areas:</h3>
          <div className="services-grid">
            <div className="service-card float-1 hover-lift">
              <div className="icon-wrapper">☁️</div>
              <h4>Cloud Technology</h4>
              <p>Salesforce and MuleSoft solutions</p>
            </div>
            <div className="service-card float-2 hover-lift">
              <div className="icon-wrapper">🌐</div>
              <h4>Web Development</h4>
              <p>Modern, responsive, and business-focused websites</p>
            </div>
            <div className="service-card float-3 hover-lift">
              <div className="icon-wrapper">📱</div>
              <h4>Mobile App Development</h4>
              <p>Android and iOS applications</p>
            </div>
            <div className="service-card float-2 hover-lift">
              <div className="icon-wrapper">⚙️</div>
              <h4>Software Testing</h4>
              <p>Quality assurance and reliable testing solutions</p>
            </div>
            <div className="service-card float-1 hover-lift">
              <div className="icon-wrapper">📈</div>
              <h4>Digital Marketing</h4>
              <p>Strategies to strengthen online presence and reach</p>
            </div>
            <div className="service-card float-3 hover-lift">
              <div className="icon-wrapper">🛠️</div>
              <h4>Technical Support</h4>
              <p>Ongoing support, maintenance, and troubleshooting</p>
            </div>
          </div>
        </div>

        {/* 3. Our Approach */}
        <div className="new-about-section slide-right reveal-on-scroll">
          <h1 className="section-title">Our Approach</h1>
          <p className="section-text text-center" style={{marginBottom: "30px"}}>
            At Collab Vision Infosolution, we believe technology should solve business problems, not create complexity.
          </p>
          <div className="approach-timeline">
            <div className="approach-item float-2 hover-lift-3d">
              <h5>🎯 Understanding Your Business</h5>
              <p>We focus on your goals and challenges.</p>
            </div>
            <div className="approach-item float-1 hover-lift-3d">
              <h5>🔄 Agile Development</h5>
              <p>Flexible and collaborative development processes.</p>
            </div>
            <div className="approach-item float-3 hover-lift-3d">
              <h5>🛡️ Quality & Reliability</h5>
              <p>Delivering secure, scalable, and dependable solutions.</p>
            </div>
            <div className="approach-item float-2 hover-lift-3d">
              <h5>💡 Innovation</h5>
              <p>Continuously adapting to emerging technologies.</p>
            </div>
            <div className="approach-item float-3 hover-lift-3d">
              <h5>🤝 Client Collaboration</h5>
              <p>Working closely with clients throughout every stage.</p>
            </div>
            <div className="approach-item float-1 hover-lift-3d">
              <h5>💰 Business Value</h5>
              <p>Creating solutions designed to improve efficiency and maximize ROI.</p>
            </div>
          </div>
        </div>

        {/* 4. Our Mission & 5. Why Choose Us (Side by side) */}
        <div className="mission-why-container pop-in-slow reveal-on-scroll">
          <div className="mission-card glass-effect hover-tilt">
            <h1 className="section-title text-white">Our Mission</h1>
            <p className="section-text text-white">
              Our mission is to empower businesses with innovative technology solutions that create measurable value and support sustainable growth.
            </p>
            <p className="section-text text-white">
              We continuously explore new technologies and industry practices to provide solutions that are practical, scalable, and aligned with our clients' evolving business needs.
            </p>
          </div>
          <div className="why-card glass-effect hover-tilt">
            <h1 className="section-title text-white">Why Collab Vision Infosolution?</h1>
            <p className="section-text text-white">
              We are a team of professional, skilled, and passionate technology experts committed to delivering meaningful digital solutions.
            </p>
            <p className="section-text text-white">
              From a new website or mobile application to cloud integration, software testing, digital marketing, or ongoing technical support, we aim to become a trusted technology partner for our clients.
            </p>
          </div>
        </div>
      </section>

      <footer>{/* Footer content here */}</footer>
    </>
  );
}

export default AboutUs;
