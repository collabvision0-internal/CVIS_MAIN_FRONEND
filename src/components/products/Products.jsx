import React, { useEffect, useState } from 'react';
import Navbar from '../attributes/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import '../about_us/About.css';
import '../attributes/Attributes.css';
import './Products.css';

const productsList = [
  { 
    id: 1, 
    title: 'Website Builder', 
    subtitle: 'Build Your Professional Online Presence',
    img: '/products/website-builder.jpg',
    description: [
      "Our Website Builder enables businesses to create professional, responsive, and user-friendly websites for establishing their digital presence.",
      "We primarily develop static websites using our own development approach, with customized designs and content based on the client's requirements."
    ],
    featuresTitle: "Key Benefits:",
    features: [
      "Professional and responsive website design",
      "Mobile, tablet, and desktop compatibility",
      "Customized pages and business content",
      "Fast and lightweight website structure",
      "SEO-friendly development practices",
      "Easy integration of contact and enquiry forms",
      "Customized design based on business requirements"
    ],
    note: "Note: Website development is subject to the agreed scope, features, design requirements, content, integrations, and terms & conditions. Additional functionality or third-party integrations may require separate development and charges."
  },
  { 
    id: 2, 
    title: 'Gold Management App', 
    subtitle: 'Complete Business Management Solution for Goldsmiths',
    img: '/products/gold-app.png',
    description: [
      "Our Gold Management App is designed specifically to help goldsmiths and jewellery businesses efficiently manage their day-to-day operations.",
      "The platform combines invoicing, inventory, employee management, and customer loan calculations into a single solution.",
      "Available across Android, iOS, and Web Browser, the application provides flexibility to manage business operations from different devices."
    ],
    featuresTitle: "Key Features:",
    features: [
      "Gold Inventory Management",
      "Customer Management",
      "Invoice Generation",
      "Automated Invoice Calculations",
      "Customer Loan Management",
      "Loan & Interest Calculations",
      "Employee Management",
      "Transaction Records",
      "Business Dashboard",
      "Android, iOS & Web Support"
    ]
  },
  { 
    id: 3, 
    title: 'Mini ERP System', 
    subtitle: 'Streamline Your Business Operations',
    img: '/products/erp-system.jpg',
    description: [
      "Our Mini ERP System is designed to simplify essential business operations by bringing inventory, product, billing, and transaction management into one centralized platform.",
      "It helps businesses maintain accurate records, monitor stock, generate invoices, and track transactions for better operational control."
    ],
    featuresTitle: "Key Features:",
    features: [
      "Inventory Management",
      "Product & Stock Tracking",
      "Invoice & Billing Generation",
      "Sales History Management",
      "Transaction Records",
      "Dashboard Analytics",
      "Centralized Business Data",
      "Reporting & Audit Support"
    ]
  },
  { 
    id: 4, 
    title: 'HRMS System', 
    subtitle: 'Simplify Employee & HR Management',
    img: '/products/hrms-system.jpg',
    description: [
      "Our Human Resource Management System (HRMS) helps organizations manage employee-related processes through a centralized digital platform.",
      "The system reduces manual HR activities and provides an organized way to manage employee records, attendance, leave, salary slips, and holidays."
    ],
    featuresTitle: "Key Features:",
    features: [
      "Employee Attendance Management",
      "Leave Request & Approval",
      "Salary Slip Generation & Management",
      "Holiday Calendar",
      "Employee Records Management",
      "Admin Dashboard",
      "Centralized HR Information"
    ]
  },
  { 
    id: 5, 
    title: 'Blog Automation', 
    subtitle: 'Automate Your Website Content',
    img: '/products/blogs-automation.jpg',
    description: [
      "Our Blog Automation solution helps businesses simplify the process of creating, managing, and publishing blog content on their websites.",
      "The system can automate content creation and website updates, reducing the time required for repetitive content management activities."
    ],
    featuresTitle: "Key Features:",
    features: [
      "Automated Blog Creation",
      "Website Blog Updates",
      "Content Management",
      "Scheduled Publishing",
      "Centralized Blog Management",
      "Reduced Manual Content Updates"
    ]
  },
  { 
    id: 6, 
    title: 'Appointment Booking System', 
    subtitle: 'Make Appointment Management Simple',
    img: '/products/appointment-booking.jpg',
    description: [
      "Our Appointment Booking System provides businesses with a convenient way to manage customer appointments digitally.",
      "The solution can be customized for different industries and service-based businesses, allowing customers to request or schedule appointments while businesses manage their availability."
    ],
    featuresTitle: "Key Features:",
    features: [
      "Online Appointment Booking",
      "Date & Time Slot Management",
      "Customer Information Management",
      "Appointment Tracking",
      "Booking Status Management",
      "Admin Dashboard",
      "Customizable for Different Industries"
    ]
  },
  // { 
  //   id: 7, 
  //   title: 'Social Media', 
  //   subtitle: '',
  //   img: '/products/social-media.jpg',
  //   description: null,
  //   featuresTitle: null,
  //   features: null
  // },
];

function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);

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

  // Handle disabling body scroll when modal is open
  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [selectedProduct]);

  return (
    <>
      <Navbar />
      <div className="products-page-container animated-bg">
        <h1 className="products-hero-title reveal-on-scroll pop-up">Our Products & Solutions</h1>
        <p className="products-subtitle reveal-on-scroll pop-up" style={{maxWidth: "900px", margin: "0 auto 60px", lineHeight: "1.6"}}>
          At Collab Vision Infosolution, we develop practical and scalable digital products designed to simplify business operations, automate repetitive tasks, and improve overall efficiency.
        </p>

        <div className="products-grid">
          {productsList.map((product, index) => (
            <div 
              key={product.id} 
              className="product-card reveal-on-scroll pop-in-slow"
              style={{ transitionDelay: `${index * 0.05}s` }}
            >
              <div 
                className="product-img-wrapper hover-lift-3d" 
                onClick={() => setSelectedProduct(product)}
              >
                <img 
                  src={product.img} 
                  alt={product.title} 
                  className="product-image" 
                  onError={(e) => { e.target.src = "https://placehold.co/600x400/e0f0ff/0075aa?text=Add+Image" }}
                />
                <div className="product-overlay">
                  <span className="view-details-btn">Explore</span>
                </div>
              </div>
              <h3 className="product-title">{product.title}</h3>
            </div>
          ))}
        </div>

        <div className="products-footer-note reveal-on-scroll slide-up">
          <p>
            <strong>Built for Your Business</strong><br/>
            Whether you need a business website, gold management solution, ERP, HRMS, blog automation, or appointment booking system, Collab Vision Infosolution develops solutions with a focus on simplicity, automation, scalability, and business efficiency.
          </p>
        </div>
      </div>

      {/* Product Details Modal (Canvas) */}
      {selectedProduct && (
        <div className="product-modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="product-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedProduct(null)}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
            
            <div className="modal-header">
              <h2 className="modal-title">{selectedProduct.title}</h2>
              {selectedProduct.subtitle && <h4 className="modal-subtitle">{selectedProduct.subtitle}</h4>}
            </div>
            
            <div className="modal-body">
              <div className="modal-image-container">
                <img 
                  src={selectedProduct.img} 
                  alt={selectedProduct.title} 
                  onError={(e) => { e.target.src = "https://placehold.co/600x400/e0f0ff/0075aa?text=Add+Image" }}
                />
              </div>
              
              <div className="modal-info">
                {selectedProduct.description ? (
                  <>
                    <div className="modal-description">
                      {selectedProduct.description.map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                    </div>
                    
                    {selectedProduct.features && (
                      <div className="modal-features">
                        <h5>{selectedProduct.featuresTitle}</h5>
                        <ul>
                          {selectedProduct.features.map((feat, i) => (
                            <li key={i}>
                              <FontAwesomeIcon icon={faCheckCircle} className="check-icon" /> {feat}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {selectedProduct.note && (
                      <div className="modal-note">
                        <p><i>{selectedProduct.note}</i></p>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="modal-description" style={{textAlign: "center", padding: "40px 0"}}>
                    <p style={{fontSize: "1.2rem", color: "#666"}}>Detailed information for this product is coming soon!</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Products;
