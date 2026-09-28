import "./Attributes.css";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";
import logo from "../../assets/logoNav.jpg";

const Footer = () => {
  return (
    <footer className="footer-glass">
      <div className="footer-glass-container">
        
        {/* Column 1: Brand & Tagline */}
        <div className="footer-col-glass brand-col">
          <img src={logo} alt="CollabVision" className="footer-logo-img" />
          <p className="footer-tagline">
            We build innovative software, design experiences, and create high-impact digital strategies that drive growth and engagement.
          </p>
        </div>

        {/* Column 2: Navigation */}
        <div className="footer-col-glass nav-col">
          <h3>NAVIGATION</h3>
          <div className="footer-links-vert">
            <Link to="/" onClick={() => window.scrollTo(0,0)}>Home</Link>
            <Link to="/about" onClick={() => window.scrollTo(0,0)}>About Us</Link>
            <Link to="/services" onClick={() => window.scrollTo(0,0)}>Services</Link>
            <Link to="/products" onClick={() => window.scrollTo(0,0)}>Products</Link>
            <Link to="/contact" onClick={() => window.scrollTo(0,0)}>Contact Us</Link>
          </div>
        </div>

        {/* Column 3: Addresses & ISO */}
        <div className="footer-col-glass address-col">
          <h3>OFFICES</h3>
          
          <div className="office-item">
            <strong>India Office</strong>
            <p>Jawahar Nagar, Kolhapur, India</p>
            <p className="phone-line"><PhoneIcon fontSize="small" /> +91 8767421060</p>
          </div>
          
          <div className="office-item" style={{ marginTop: "15px" }}>
            <strong>Singapore Office</strong>
            <p>Singapore</p>
            <p className="phone-line"><PhoneIcon fontSize="small" /> +65 88470186</p>
          </div>
          
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWszgQllCU0cZ4hekKFjalWhBxZXiL9RcJUA&s"
            alt="ISO Certified"
            className="footer-iso-logo"
            style={{ marginTop: "15px" }}
          />
        </div>

        {/* Column 4: Social */}
        <div className="footer-col-glass social-col">
          <h3>SOCIAL</h3>
          <div className="footer-social-icons">
            <a href="https://www.instagram.com/collabvisioninfo/" target="_blank" rel="noopener noreferrer" className="social-bw float-1 hover-lift">
              <InstagramIcon />
            </a>
            <a href="https://www.facebook.com/sujatapradeepbadi/" target="_blank" rel="noopener noreferrer" className="social-bw float-2 hover-lift">
              <FacebookIcon />
            </a>
            <a href="https://www.linkedin.com/in/collab-vision-infosolutions-24844426b/" target="_blank" rel="noopener noreferrer" className="social-bw float-3 hover-lift">
              <LinkedInIcon />
            </a>
          </div>
        </div>

      </div>

      <div className="footer-bottom-bar-glass">
        <p>© 2024 Collab Vision Infosolutions. All rights reserved.</p>
        <p>Designed & Developed by CollabVision</p>
      </div>
    </footer>
  );
};

export default Footer;
