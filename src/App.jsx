import AboutUs from "./components/about_us/AboutUs";
// import ContactUs from './components/contact_us/ContactUs';
import Services from "./components/cservices/Services";
import Home from "./components/home/Home";
import Learning from "./components/learning_modules/Learning";
import Navbar from "./components/attributes/Navbar";
import Footer from "./components/attributes/Footer";
import ChatbotWidget from "./components/attributes/ChatbotWidget";
import Ccpage from "./components/learning_modules/learning_pages/ccpage";
import Softwaretestinfpage from "./components/learning_modules/learning_pages/softwaretestinfpage";
import Ccmulesoft from "./components/learning_modules/learning_pages/ccmulesoft";

import Ccmul from "./components/learning_modules/content/ccmul";
import CloudComputing from "./components/learning_modules/content/CloudComputing";
import SoftwareTesting from "./components/learning_modules/content/SoftwareTesting";

import Garphic from "./components/cservices/servicepages/garphic";
import Seopage from "./components/cservices/servicepages/seopage";
import Swdevelopment from "./components/cservices/servicepages/swdevelopment";
import Cloudcpage from "./components/cservices/servicepages/cloudcpage";
import Softwaretesting from "./components/cservices/servicepages/swtesting";
import Digitalbranding from "./components/cservices/servicepages/digitalbranding";
import Androiddevpage from "./components/cservices/servicepages/androiddevpage";
import Integration from "./components/cservices/servicepages/Integration";
import Ccpagecontent from "./components/learning_modules/learning_pages/ccpage";
import Webdesign from "./components/cservices/servicepages/webdesign";
import Products from "./components/products/Products";
import Login from "./components/attributes/login";
import ServiceDetail from "./components/cservices/ServiceDetail";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import Cont from "./components/contact_us/Cont";
import Temp from "./components/home/Temp";
import Timeline from "./components/home/Motion/Timeline";
import PricingCards from "./components/home/allCards/PricingCards";
import ProductPrice from "./components/ProductPrice";
import { Helmet } from "react-helmet";
import ParticlesBackground from "./components/ParticlesBackground";

function ScrollToTopAuto() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <>
      {" "}
      <ParticlesBackground />
      <Helmet>
        <title>
          Collab Vision Info Solution - Software Development Company
        </title>
        <meta
          name="description"
          content="Collab Vision Info Solution is a leading software development company, providing innovative solutions to businesses worldwide."
        />
        <meta
          name="keywords"
          content="Collab Vision Info Solution, software development, IT services, custom software, enterprise solutions"
        />
        <meta
          property="og:title"
          content="Collab Vision Info Solution - Software Development Company"
        />
        <meta
          property="og:description"
          content="Collab Vision Info Solution delivers cutting-edge software solutions to empower your business."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.collabvisioninfosolution.com"
        />
        <meta
          property="og:image"
          content="https://www.collabvisioninfosolution.com/og-image.jpg"
        />
        <meta property="og:site_name" content="Collab Vision Info Solution" />
      </Helmet>
      <Router>
        <ScrollToTopAuto />
        {/* <Navbar /> */}
        <Routes>
          <Route path="/temp" element={<Timeline />} />

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Cont />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/detail/:id" element={<ServiceDetail />} />
          <Route path="/services/graphic" element={<Garphic />} />
          <Route path="/services/seopage" element={<Seopage />} />
          <Route path="/services/cloudpage" element={<Cloudcpage />} />
          <Route path="/services/Integration" element={<Integration />} />
          <Route path="/services/webdesign" element={<Webdesign />} />
          <Route path="/services/appdev" element={<Androiddevpage />} />
          <Route
            path="/services/digitalbrandpage"
            element={<Digitalbranding />}
          />
          <Route path="/services/swdevelopment" element={<Swdevelopment />} />
          <Route
            path="/services/softwaretesting"
            element={<Softwaretesting />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/learning/ccpage" element={<Ccpage />} />
          <Route
            path="/learning/ccpage/ccpagecontent"
            element={<CloudComputing />}
          />

          <Route path="/learning/ccmulcontent" element={<Ccmul />} />
          <Route path="/learning/ccpagecontent" element={<Ccpagecontent />} />

          <Route
            path="/learning/softwaretestinfpage"
            element={<Softwaretestinfpage />}
          />
          <Route
            path="/learning/ccpage/SoftwareTesting"
            element={<SoftwareTesting />}
          />
          <Route path="/learning/ccmulesoft" element={<Ccmulesoft />} />

          {/* <Route path="/pricing" element={<PricingCards />}></Route> */}
          <Route path="/pricing/:category" element={<PricingCards />} />
          <Route path="/p" element={<ProductPrice />} />
        </Routes>
        <ChatbotWidget />
        <Footer />
      </Router>
    </>
  );
}

export default App;
