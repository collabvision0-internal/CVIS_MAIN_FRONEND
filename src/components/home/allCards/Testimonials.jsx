// import React, { useEffect, useState } from "react";
// import "./Testimonials.css";
// import axios from "axios";

// const Testimonials = () => {
//   const [feeds, setFeeds] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           "https://cviswebsitebackend.onrender.com/feedbackthree"
//         );
//         console.log(response.data);
//         setFeeds(response.data);
//       } catch (e) {
//         console.log(e);
//       }
//     };

//     fetchData();
//     // console.log(feeds);
//   }, []);
//   return (
//     <div className="body1">
//       {" "}
//       <h1>What our customer says ?</h1>{" "}
//       <div className="wrapper">
//         {feeds.map((item) => (
//           <div key={item._id} className="box animate-down">
//             <i className="fas fa-quote-left quote"></i>
//             <p>{item.likeMost}</p>
//             <div className="content">
//               <div className="info">
//                 <div
//                   className="raing"
//                   style={{ color: "gold", fontSize: "20px" }}
//                 >
//                   {Array.from({ length: item.rating }, (_, i) => (
//                     <span key={i}>★</span>
//                   ))}
//                 </div>
//                 <div className="name">
//                   {item.firstName} {item.lastName}
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//         {/* <div className="box animate-down">
//           <i className="fas fa-quote-left quote"></i>
//           <p>
//             Lorem aliasry ipsum dolor sits ametans, consectetur adipisicing
//             elitits. Expedita reiciendis itaque placeat thuratu, quasi yiuos
//             repellendus repudiandae deleniti ideas fuga molestiae, alias.
//           </p>
//           <div className="content">
//             <div className="info">
//               <div className="name">Alex Smith</div>
//             </div>
//           </div>
//         </div>
//         <div className="box animate-down">
//           <i className="fas fa-quote-left quote"></i>
//           <p>
//             Lorem aliasry ipsum dolor sits ametans, consectetur adipisicing
//             elitits. Expedita reiciendis itaque placeat thuratu, quasi yiuos
//             repellendus repudiandae deleniti ideas fuga molestiae, alias.
//           </p>
//           <div className="content">
//             <div className="info">
//               <div className="name">Alex Smith</div>
//             </div>
//           </div>
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default Testimonials;
import React, { useState } from "react";
import "./Testimonials.css";

const Testimonials = () => {
  const [feeds] = useState([
    {
      _id: "1",
      likeMost: "I’m very happy with the website created by Collab Vision. The website is responsive, modern, and has attractive animations. Great work and professional service.",
      rating: 5,
      firstName: "Om Shetty",
      lastName: "– TheVision9",
      websiteLink: "https://www.thevision9.com",
      linkText: "www.thevision9.com"
    },
    {
      _id: "2",
      likeMost: "Collab Vision did a great job creating our education website for students in Singapore. The website is user-friendly, professional, and works smoothly on different devices. Highly recommended.",
      rating: 5,
      firstName: "Peter",
      lastName: "– Plenrich",
      websiteLink: "https://www.plenrich.com",
      linkText: "www.plenrich.com"
    },
    {
      _id: "3",
      likeMost: "I am very satisfied with Collab Vision’s work. They developed an Android and iOS app for my Gold Jewellery Retail and Girvi Software. The app is easy to use and works very well.",
      rating: 5,
      firstName: "Raju Hanamasagar",
      lastName: "– Gold Jewellery Retailer & Girvi Software",
      websiteLink: "",
      linkText: ""
    },
    {
      _id: "4",
      likeMost: "I am very satisfied with the work done by Collab Vision. They understood our requirements and created a professional website for Lakeview Hospitals. Thank you for the excellent service.",
      rating: 5,
      firstName: "Dr. Girish K. Sonwalkar",
      lastName: "– Lakeview Hospitals",
      websiteLink: "https://lakeviewhospitals.in",
      linkText: "lakeviewhospitals.in"
    },
    {
      _id: "5",
      likeMost: "I am very satisfied with Collab Vision’s work on my website. They created a professional and attractive website that represents my holistic healing services beautifully. Thank you for the great work.",
      rating: 5,
      firstName: "Dr. Uma Patil",
      lastName: "– Holistic Healing",
      websiteLink: "https://drumapatilholistichealing.com/",
      linkText: "drumapatilholistichealing.com"
    }
  ]);

  return (
    <div className="body1">
      <h1>What our customers say?</h1>
      <div className="slider-container">
        <div className="slider-track">
          {[...feeds, ...feeds].map((item, index) => (
            <div key={`${item._id}-${index}`} className="box">
              <i className="fas fa-quote-left quote"></i>
              <p>“{item.likeMost}”</p>
              <div className="content">
                <div className="info">
                  <div
                    className="raing"
                    style={{ color: "gold", fontSize: "20px" }}
                  >
                    {Array.from({ length: item.rating }, (_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <div className="name" style={{ marginTop: "10px", fontSize: "16px" }}>
                    {item.firstName} {item.lastName}
                  </div>
                  {item.websiteLink && (
                    <div className="website-link" style={{ marginTop: "5px" }}>
                      <a 
                        href={item.websiteLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        style={{ color: "#0075aa", textDecoration: "none", fontSize: "14px", fontWeight: "600" }}
                      >
                        {item.linkText}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
